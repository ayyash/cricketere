import { Directive, OnInit, ViewContainerRef, TemplateRef, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
    selector: '[shServerRender]',
    standalone: true
})
export class AppShellRenderDirective implements OnInit {
    @Input() shServerRender: boolean;

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        // instead of the cdk for some reason
        @Inject(PLATFORM_ID) private platformId: any
    ) {}

    ngOnInit() {
        // if sherverrender is false, do not render on server, if true, serve only on server
        if (isPlatformServer(this.platformId) === this.shServerRender) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
