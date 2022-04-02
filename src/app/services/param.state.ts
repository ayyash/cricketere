import { Injectable } from '@angular/core';
import { IListOptions } from '../models/list.model';
import { StateService } from './state.abstract';

@Injectable()
export class ParamState extends StateService<IListOptions> {}

