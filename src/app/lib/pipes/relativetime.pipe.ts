import { Pipe, PipeTransform } from '@angular/core';
import { Res } from '../../core/resources';

// TODO: translation and resources
@Pipe({ name: 'relativetime' })
export class RelativeTimePipe implements PipeTransform {
    transform(date: Date, format: string = ''): string {
        const current = new Date().valueOf();
        const input = date.valueOf();
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;

        const elapsed = current - input;

        if (elapsed < msPerMinute) {
            return Res.RelativeTime('SECONDS', Math.round(elapsed / 1000));
        } else if (elapsed < msPerHour) {
            return Res.RelativeTime('MINUTES', Math.round(elapsed / msPerMinute));
        } else if (elapsed < msPerDay) {
            return Res.RelativeTime('HOURS', Math.round(elapsed / msPerHour));
        } else if (elapsed < msPerMonth) {
            return Res.RelativeTime('DAYS', Math.round(elapsed / msPerDay));
        } else if (elapsed < msPerYear) {
            return Res.RelativeTime('MONTHS', Math.round(elapsed / msPerMonth));
        } else {
            return Res.RelativeTime('YEARS', Math.round(elapsed / msPerYear));
        }
    }
}
