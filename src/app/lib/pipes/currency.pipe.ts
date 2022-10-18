import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'crCurrency', standalone: true })
export class CustomCurrencyPipe extends CurrencyPipe implements PipeTransform {


    transform(value: number | string | null | undefined, currencyCode?: string): any {
        // get symbol
        return super.transform(value, currencyCode, 'symbol-narrow');

    }
}

