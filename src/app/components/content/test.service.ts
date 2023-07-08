import { Injectable } from '@angular/core';
import { StateService } from '../../services/state.abstract';

@Injectable()
export class SomeService extends StateService<any>{


  constructor() {
    super();
    _attn('initialized');
  }

}
