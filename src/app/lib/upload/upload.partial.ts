import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, Inject, ViewEncapsulation } from '@angular/core';
import { IClientFile, IClientFileError, IClientFileConfig } from './clientfile.model';
import { Res } from '../../core/resources';
import { Toast } from '../toast';
import { DomSanitizer } from '@angular/platform-browser';

// WATCH: its better not to allow this component to render on server side ever
@Component({
    selector: 'sh-upload',
    templateUrl: './upload.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadPartialComponent implements OnInit {
    @Output() onFileChange: EventEmitter<IClientFile> = new EventEmitter(null);
    @Output() onError: EventEmitter<IClientFileError> = new EventEmitter(null);

    @Input() size: number; // override maximum size
    @Input() format: string[]; // overfide allowed format
    @Input() multiple: boolean; // VER_NEXT: if multiple emit an array

    fileUrl: string;
    constructor(
        @Inject('config') private config: IClientFileConfig,
        private toast: Toast,
        private sanitizer: DomSanitizer
    ) {
        //
    }
    ngOnInit(): void {
        if (!this.size) {
            this.size = this.config.defaultUploadSize;
        }
        if (!this.format) {
            this.format = this.config.defaultUploadFormat;
        }
    }



    getFile(input: HTMLInputElement): void {
        // VER_NEXT: allow multiple types and allow upload immidiately

        // filereader to load file on client
        // then place image in its own form and emit?! i need to upload after i create

        const files = input.files;
        const file = files.length ? files[0] : null;

        let _isvalid = true;
        const valid: IClientFileError = { size: true, format: true, code: '' };

        if (file) {
            // file types like "image/png"
           
            if (this.format.findIndex(n => file.type.indexOf(n) > -1) < 0) {
                valid.format = false;
                _isvalid = false;
            }

            if (file.size > this.size) {
                valid.size = false;
                _isvalid = false;
            }

            if (_isvalid) {
                // for images only
                if (typeof window !== 'undefined') {
                    this.fileUrl = window.URL.createObjectURL(file);
                }
                const clientfile: IClientFile = {
                    id: '',
                    path: this.sanitizer.bypassSecurityTrustUrl(this.fileUrl), // use this for images
                    file: file // contains name and size
                };
                this.onFileChange.emit(clientfile);


            } else {
                // handle most of the errors here
                this.errorOut(valid);
                this.onError.emit(valid);
            }
        } else {
            // emit error or return invalid container?
            valid.code = 'Unknown';
            this.onError.emit(valid);
        }
    }

    errorOut(valid: IClientFileError): void {
        // alert message and remove file

        if (!valid.format) {
            // replce format
            this.toast.Show('', { extracss: 'error' }, Res.Get('INVALID_FILE_FORMAT').replace('$0', this.format.join(', ')));
        } else if (!valid.size) {
            // prettify size
            let _size = Math.floor(this.size / 1000); // KB
            if (_size > 1000) {
                _size = Math.floor(_size / 1000); // MB
            }
            this.toast.Show('', { extracss: 'error' }, Res.Get('FILE_LARGE').replace('$0', _size.toString()));
        } else {
            this.toast.Show(valid.code, { extracss: 'error' });
        }
    }
}
