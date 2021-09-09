import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ClientFile, IClientFile } from './clientfile.model';

@Injectable()
export class ClientFileService {
    constructor(private _http: HttpClient) {
    }

    UploadFile(files: any[], url: string): Observable<IClientFile[]> {
        // if no clientFile, do not upload
        if (!files || !files.length) {
            return of(null);
        }

        const data = new FormData();
        files.forEach(n => data.append('files', n));

        _debug(files.map(n => n.name).join(', '), 'UploadFile Data');

        // change header
        return this._http.post(url, data).pipe(
            map(response => { 
                return ClientFile.NewInstances(<any>response);
            })
        );
    }
}
