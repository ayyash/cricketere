import { Observable } from 'rxjs';
import { IList, IListOptions } from '../core/services';
import { IStateService } from './state.abstract';


export interface IPagedService<T>  extends IStateService<T> {
    GetPagedList(options: IListOptions): Observable<IList<T>>;
}
