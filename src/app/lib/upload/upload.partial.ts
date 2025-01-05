import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cr-upload',
  template: `
    <div class="upload-container {{css}}">
      <input
        class="cr-input"
        type="file"
        [attr.accept]="allowedFormats.join(',')"
        [required]="required ? true : null"
        (change)="onFileSelected($event)"
      />
    </div>
  `,
  // imports: [CommonModule]
})

export class UploadPartial implements OnInit {


  // input maximun size and allowed format, and required
  @Input({alias: 'size'}) maxFileSize: number = 10485760; // 10MB
  @Input({alias: 'format'}) allowedFormats: string[] = ['image/jpeg', 'image/png', 'application/pdf'];
  @Input() required: boolean = true;

  @Input() css: string = '';

  constructor() { }

  ngOnInit() { }

  onFileSelected($event: Event) {

    // update validatuity state

  }
}
