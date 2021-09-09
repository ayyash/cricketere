import { Directive, Input, HostListener } from '@angular/core';
import { GaTracking, IGaOptions, EnumGaType } from '../../core/ga';


@Directive({
    selector: '[shTrack]',
    exportAs: 'shGa'
})
export class GaDirective {
    @Input() shTrack: IGaOptions;

    @HostListener('click', ['$event.target'])
    onClick(target: HTMLElement): void {
        // if event is click send a click event
        // simplify
        GaTracking.RegisterEvent(
            this.shTrack.category,
            this.shTrack.action,
            this.shTrack.label,
            {
                type:  this.shTrack.type || EnumGaType.event,
                value: this.shTrack.value
            });

    }
}
