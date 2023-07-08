import { Injectable } from '@angular/core';

@Injectable()
export class MintService {

  message: string;
  constructor() {
    _attn(this, 'mint service created');
  }
  setMessage(message: string) {
    this.message = message;
  }
  getMessage() {
    return this.message;
  }
}
