import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tohtml' })
export class ToHtmlPipe implements PipeTransform {


    transform(tohtml: string): string {
        // search for \r\n and replace with <br>
        let content = tohtml.replace('\r\n', '<br>');

        // what else
        return content;

    }
}

