export class MdPatterns {

    private static _Patterns = {
        'shortname': '[A-Za-z]{5}',
        'phone': '[\\d\\s]*',
        'password': '[\\S]{8,}'
    };

    public static Get(key: string, fallback?: string): string {
        // if found return else generic
        if (this._Patterns[key]) {
            return this._Patterns[key];
        }

        return fallback || '';
    }
}

