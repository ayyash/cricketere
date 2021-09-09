import { Observable, BehaviorSubject, of, timer, Subscription } from 'rxjs';
import { IToast } from './toast.model';
import { Res } from '../../core/resources';
import { Injectable } from '@angular/core';
import { IUiError } from '../../core/services';

@Injectable({ providedIn: 'root' })
export class Toast {
    toast: BehaviorSubject<IToast | null> = new BehaviorSubject(null);
    public toast$: Observable<IToast | null> = this.toast.asObservable();

    private isCancled: Subscription;

    options: IToast = {
        text: Res.Get('Error'),
        sticky: false,
        css: 'toast',
        closetext: Res.Get('Dismiss'),
        delay: 5000,
        threshold: 30000, // milliseconds before force hiding a sticky one
        extracss: '',
        buttons: [],
        // onHide: null,
        isHiding: false // is in the state of hiding, to animate properly
    };

    // VER_NEXT: allow this
    // constructor(){
    //     this.router.events.subscribe(event => {
    //         if (event instanceof NavigationStart) {
    //             if (this.keepAfterRouteChange) {
    //                 // only keep for a single route change
    //                 this.keepAfterRouteChange = false;
    //             } else {
    //                 // clear alert message
    //                 this.clear();
    //             }
    //         }
    //     });
    // }

    // VER_NEXT: note to self, all ways to control animation through css has gone awry
    // the best way is to add and remove classes within delay,  never rely on css animation delay
    Show(key: string, options?: IToast, fallback?: string): void {
        // clone optons and never override

        this.Hide();

        const _options: IToast = { ...this.options, ...options};
        // fallback if message does not exist in keys
        _options.text = Res.Get(key, fallback);


        this.toast.next(_options);

        const _delay = !_options.sticky ? _options.delay : _options.threshold;

        if (_delay) {

            this.isCancled = timer(_delay)
                // if hidden cancel timer, also unsubscribe just in case the toast refills before timer, duh!
                .subscribe(() => {
                     // first apply class then remove (animation)
                     this.toast.next({..._options, isHiding: true});
                     timer(200).subscribe(() => {
                        this.Hide();
                    });
                });
        }
    }

    Hide(): void {
        if (this.isCancled) {
            this.isCancled.unsubscribe();
        }
        this.toast.next(null);

    }

    public HandleUiError(error: IUiError): void {
        if (error) {
            if (error.code) {
                // this function handles whether to show the message or the fallback, if error.code = -1
                this.Show(
                    error.code,
                    { sticky: true, extracss: 'error' },
                    <string>error.serverMessage
                );
            } else {
                // something unpredictable happened
                _debug(error, 'Something nasty', 't');
            }
        }
    }

    public HandleCatchError(error: IUiError, code?: string): Observable<any> {
        if (error.status === 404) {
            if (code) {
                error.code = code + '_NOT_FOUND';
            }
        }
        if (error.status === 400) {
            if (code) {
                error.code = code + '_ERROR';
            }
        }
        this.HandleUiError(error);
        return of(null);
    }
}
