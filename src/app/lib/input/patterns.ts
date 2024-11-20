export class InputPatterns {

  private static _Patterns = {
    'phone': '[\\d\\s]*',
    'password': '[\\S]{8,}',
    'positiveNumber': /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/,
  };

  public static Get(key: string): string {
    // if found return else generic
    if (this._Patterns[key]) {
      return this._Patterns[key];
    }

    return null;
  }

  public static addPattern(key: string, pattern: string) {
    InputPatterns._Patterns[key] = pattern;
  }
}
