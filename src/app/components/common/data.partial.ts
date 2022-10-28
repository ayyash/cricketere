import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { EnumDataType, DataService, IData } from '../../core/services';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'cr-data',
    template: `{{ (data$ | async)?.value}}`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule]
})
export class DataPartialComponent {
    data$: Observable<IData | undefined>;

    @Input()
    set dataitem(value: { key: string; type: EnumDataType }) {
        this.data$ = this._dataService.GetSingleDataByKey(value.type, value.key);
    }

    constructor(private _dataService: DataService) {}
}
