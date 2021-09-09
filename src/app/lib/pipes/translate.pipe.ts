import { Pipe, PipeTransform } from '@angular/core';
import { Res } from '../../core/resources';
import { toSentenceCase } from '../../core/common';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {

    transform(original: string, res: string, tocase: string = 'normal'): string {
        const value = Res.Get(res, original);

        if (value) {
            return tocase === 'sentence' ? toSentenceCase(value) : value;
        }
        return original;

    }
}

