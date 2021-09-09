import { Pipe, PipeTransform } from '@angular/core';
import { Res } from '../../core/resources';

@Pipe({ name: 'dayname' })
export class DayNamePipe implements PipeTransform {


    transform(day: number): string {
        // return string?
        return Res.Get('Days')[day];

    }
}

