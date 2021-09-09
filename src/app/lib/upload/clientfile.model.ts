import { SafeUrl } from '@angular/platform-browser';

export interface IClientFileConfig {
    defaultUploadSize: number;
    defaultUploadFormat: string[];
}

// FIXME: allow thumbnails
export interface IClientFileError {
    size: boolean;
    format: boolean;
    code?: string;
}


export interface IClientFile {
    id?: string;
    path: string | SafeUrl;
    file?: {
        name: string,
        size: number
    };
}
export class ClientFile implements IClientFile {
    constructor(
        public path: string,
        public file?: { name: string, size: number },
        public id?: string,
    ) {

    }


    public static NewInstance(file: any): IClientFile {
        
        return new ClientFile(
            file.path,
            {
                name: file.file.name,
                size: file.file.size
            },
            file.id
        );
    }
    public static NewInstances(files: any[]): IClientFile[] {
        return files.map(ClientFile.NewInstance);
    }


}