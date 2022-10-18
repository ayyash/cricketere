import { NgModule } from '@angular/core';

// inject:importlibs
import { BgDirective } from './directives/bg.directive';
import { Cri18nDirective } from './directives/cri18n.directive';
import { ExpandsDirective } from './directives/expands.directive';
import { GtmDirective } from './directives/gtm.directive';
import { LazyDirective } from './directives/lazy.directive';
import { LetDirective } from './directives/let.directive';
import { ModalDirective } from './directives/modal.directive';
import { AppShellRenderDirective } from './directives/render.directive';
import { ScrollDirective } from './directives/scroll.directive';
import { CustomCurrencyPipe } from './pipes/currency.pipe';
import { DayNamePipe } from './pipes/dayname.pipe';
import { PrettyPricePipe } from './pipes/prettyprice.pipe';
import { PrettyTimePipe } from './pipes/prettytime.pipe';
import { RelativeTimePipe } from './pipes/relativetime.pipe';
import { ResPipe } from './pipes/res.pipe';
import { ToHtmlPipe } from './pipes/tohtml.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
// endinject


@NgModule({
    // imports: [CommonModule],
    declarations: [
         // inject:libs
        BgDirective,
        Cri18nDirective,
        ExpandsDirective,
        GtmDirective,
        LazyDirective,
        LetDirective,
        ModalDirective,
        AppShellRenderDirective,
        ScrollDirective,
        CustomCurrencyPipe,
        DayNamePipe,
        PrettyPricePipe,
        PrettyTimePipe,
        RelativeTimePipe,
        ResPipe,
        ToHtmlPipe,
        TranslatePipe,
        // endinject
    ],
    exports: [
         // inject:libs
        BgDirective,
        Cri18nDirective,
        ExpandsDirective,
        GtmDirective,
        LazyDirective,
        LetDirective,
        ModalDirective,
        AppShellRenderDirective,
        ScrollDirective,
        CustomCurrencyPipe,
        DayNamePipe,
        PrettyPricePipe,
        PrettyTimePipe,
        RelativeTimePipe,
        ResPipe,
        ToHtmlPipe,
        TranslatePipe,
        // endinject
    ]
})
export class LibModule { }
