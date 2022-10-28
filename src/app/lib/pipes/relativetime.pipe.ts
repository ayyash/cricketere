import { Pipe, PipeTransform } from '@angular/core';
import { Res } from '../../core/resources';

@Pipe({ name: 'relativetime' , standalone: true})
export class RelativeTimePipe implements PipeTransform {
    transform(date: Date, future: boolean = false): string {
        // find elapsed
        const current = new Date().valueOf();
        const input = date.valueOf();
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;

        const elapsed = Math.abs(input - current);
        const fallBack = date.toString();

        let relTime = Res.Plural('YEARS', Math.round(elapsed / msPerYear), fallBack);
        if (elapsed < msPerMinute) {
            relTime = Res.Plural('SECONDS', Math.round(elapsed / 1000), fallBack);
        } else if (elapsed < msPerHour) {
            relTime = Res.Plural('MINUTES', Math.round(elapsed / msPerMinute), fallBack);
        } else if (elapsed < msPerDay) {
            relTime = Res.Plural('HOURS', Math.round(elapsed / msPerHour), fallBack);
        } else if (elapsed < msPerMonth) {
            relTime = Res.Plural('DAYS', Math.round(elapsed / msPerDay), fallBack);
        } else if (elapsed < msPerYear) {
            relTime =  Res.Plural('MONTHS', Math.round(elapsed / msPerMonth), fallBack);
        }

        // replace the $0 with the relative time
        return (future ? Res.Get('INTIME') : Res.Get('TIMEAGO')).replace('$0', relTime);
    }
}
