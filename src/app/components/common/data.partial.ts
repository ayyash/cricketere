import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { EnumDataType, DataService, IData } from '../../core/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'cr-data',
    template: `{{ (data$ | async)?.name}}`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataPartialComponent {
    data$: Observable<IData | undefined>;

    @Input()
    set dataitem(value: { key: string; type: EnumDataType }) {
        this.data$ = this._dataService.GetSingleDataByKey(value.type, value.key);
    }

    constructor(private _dataService: DataService) {}
}
