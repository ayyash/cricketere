import { Directive, Input, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { EnumGtmEvent, EnumGtmGroup, EnumGtmSource, GtmTracking, IGtmTrack } from '../../core/gtm';


@Directive({
    selector: '[shGtm]',
    exportAs: 'shGtm',
    standalone: true
})
export class GtmDirective implements AfterViewInit {
    @Input() shGtm: {source: EnumGtmSource, group: EnumGtmGroup};

    // onload let the element have id, or data-something, then populate source and group
    constructor(private el: ElementRef){

    }

    ngAfterViewInit(): void {
        // update attributes based on element information
        this.el.nativeElement.setAttribute('data-event', EnumGtmEvent.GroupClick);
        this.el.nativeElement.setAttribute('data-source', this.shGtm.source || EnumGtmSource.Anywhere);
        this.el.nativeElement.setAttribute('data-group', this.shGtm.group || EnumGtmGroup.General);
    }
    @HostListener('click', ['$event.target'])
    onClick(target: HTMLElement): void {
        // if event is click send a click event
        GtmTracking.RegisterEvent({
            event: EnumGtmEvent.GroupClick,
            source: this.shGtm.source || EnumGtmSource.Anywhere
          },GtmTracking.MapGroup(
            this.shGtm.group || EnumGtmGroup.General,
            this.el.nativeElement.innerText
          ));
    }
}
