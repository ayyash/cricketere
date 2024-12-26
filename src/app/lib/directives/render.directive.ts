import { isPlatformServer } from '@angular/common';
import { Directive, Inject, Input, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[shServerRender]',
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
