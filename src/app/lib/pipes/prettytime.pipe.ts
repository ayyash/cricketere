import { Pipe, PipeTransform } from '@angular/core';
import { Res } from '../../core/resources';

@Pipe({ name: 'prettytime' })
export class PrettyTimePipe implements PipeTransform {
    // transform 210 to 3:30 AM
    transform(prettytime: number): string {
        let h = Math.floor(prettytime / 60);
        // if more than 24, reduce
        if (h >= 24) {
            h -= 24;
        }

        let a = Res.Get('AM');
        if (h > 12) {
            h -= 12;
            a = Res.Get('PM');
        }
        if (h === 0) {
            h = 12;
        }

        const m = prettytime % 60;

        return String(h) + ':' + String(m).padStart(2, '0') + ' ' + a;

        // this isn't the right way, keep then remove in next version
        // let h = Math.floor(prettytime / 100);
        // const m = String(prettytime % 100);
    }
}
