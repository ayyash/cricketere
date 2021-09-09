declare let ga: Function; // Declare ga as a function

export interface IGaOptions {
    category: EnumGaCategory; // also social network
    action: EnumGaAction; // also social action
    label?: string; // also social target
    value?: any;
    type?: EnumGaType; // event or social
}

export interface IGaDims {
    dim?: string;

}
enum EnumGaDim {
    dim = 'dimension1',
    // add custom dimetions
}
export enum EnumGaType {
    event = 'event',
    social = 'social'
}

export enum EnumGaCategory {
    Shares = 'Shares',
    // add cats
}
export enum EnumGaAction {

    Click = 'Click',
    // add actopns
}
export class GaTracking {
    // for google analytics
    // u need a service
    public static get IsGaEnabled(): boolean {
        return typeof window !== 'undefined' && window['ga'];
    }
    private static MapGaDims(dims?: IGaDims): any {
        // return dims with their real dimention names, remove empty
        const ret = {};
        if (!dims) {
            return null;
        }

        Object.keys(dims).forEach(n => {
            const key = EnumGaDim[n];
            if (key && dims[n]) {
                ret[key] = dims[n];
            }
        });

        return ret;
    }

    public static RegisterView(url: string, dims?: IGaDims): void {
        _debug(url, 'register view');
        if (GaTracking.IsGaEnabled) {
            // register a view
            // map gadims first
            const _dims = GaTracking.MapGaDims(dims);
            ga('set', 'page', url);
            ga('send', 'pageview', _dims); // also send custom dimetions, bleeeeeeehy

        }
    }
    public static RegisterEvent(
        category: EnumGaCategory,
        action: EnumGaAction,
        label?: string,
        extras?: { type?: EnumGaType; value?: any }
    ): void {
        _debug({ category, action, label }, 'register event');

        if (GaTracking.IsGaEnabled) {
            // event or social
            const _extras = { type: EnumGaType.event, ...extras };
            ga('send', _extras.type, category, action, label, _extras.value);
        }
    }

    public static SetValue(name: string, value: string): void {
        _debug({ name, value }, 'Set GA value');

        if (GaTracking.IsGaEnabled) {
            // set value, this wont register until the next pageview
            ga('set', name, value);
        }
    }
    public static RegisterCampaign(dims: any): void {
        _debug(dims, 'Register Campaign without view');

        if (GaTracking.IsGaEnabled) {
            ga('send', 'pageview', dims);
        }
    }

    public static RegisterError(text: string, isfatal = false): void {
        _debug(text, 'register exception');

        if (GaTracking.IsGaEnabled) {
            ga('send', 'exception', {
                exDescription: text,
                exFatal: isfatal
            });
        }
    }
}
