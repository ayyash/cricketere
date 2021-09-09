// for page state
import { BehaviorSubject, Observable } from 'rxjs';
import { clone } from '../core/common';
import { IState } from '../core/services';

export interface IStateService<T> {
    stateList$: Observable<T[]>;
    appendList(items: T[], dbCount?: number): void;
    emptyList(): void;
    resetCount(): void;

    // TODO: the rest
}



export class StateService<T extends IState> implements IStateService<T> {

    protected stateList: BehaviorSubject<T[]> = new BehaviorSubject([]);
    stateList$: Observable<T[]> = this.stateList.asObservable().debug('List', 'State');

    protected stateItem: BehaviorSubject<T | null> = new BehaviorSubject(null);
    stateItem$: Observable<T | null> = this.stateItem.asObservable().debug('Item', 'State');

    protected dbCount: BehaviorSubject<number> = new BehaviorSubject(0);
    dbCount$: Observable<number> = this.dbCount.asObservable().debug('DbCount', 'State');


    constructor() {
        // _attn(this, 'what is instantiated');
    }


    appendList(items: T[], dbcount?: number) {
        // update current list
        const currentList = this.currentList.concat(items);
        this.stateList.next(currentList);

        // dbCount is the number of total items returned from db regardless of the list length
        if (dbcount) {
            this.dbCount.next(dbcount);
        }

    }

    resetCount() {
        this.dbCount.next(0);
    }

    get listLength(): number {

        const currentList = this.stateList.getValue();
        return currentList ? currentList.length : 0;
    }

    // this can't be good but keep it until u dont need
    get currentList(): T[] {
        return this.stateList.getValue();
    }

    get currentCount(): number {
        return this.dbCount.getValue();
    }

    // return ready observable
    GetList(items: T[]): Observable<T[]> {
        this.loadList(items);
        return this.stateList$;
    }

    loadList(items: T[]) {
        this.stateList.next(items);
    }

    emptyList() {
        this.stateList.next([]);
    }


    addItem(item: T): void {
        this.stateList.next([...this.currentList, item]);
        this.updateDbCount(true);
    }
    prependItem(item: T): void {
        this.stateList.next([item, ...this.currentList]);
        this.updateDbCount(true);
    }
    editItem(item: T): void {
        const currentList = this.currentList;
        const index = currentList.findIndex(n => n.id === item.id);
        if (index > -1) {
            currentList[index] = clone(item);
            this.stateList.next([...currentList]);
        }
    }
    removeItem(item: T): void {
        // const currentList = this.stateList.getValue();
        this.stateList.next(this.currentList.filter(n => n.id !== item.id));

        this.updateDbCount(false);
    }

    // for state of a single item (using in edit pops)
    get currentItem(): T | null{

        return this.stateItem.getValue();
    }

    // return ready observable
    GetItem(item: T): Observable<T | null> {
        this.loadItem(item);
        return this.stateItem$;
    }

    // those two are the same!
    loadItem(item: T) {
        this.stateItem.next(item);
    }

    editSingleItem(item: T): void {
        this.stateItem.next(clone(item));
    }


    private updateDbCount(dir: boolean): void {
        // update the total count to reflect adding and deleting
        let count = this.dbCount.getValue();
        dir ? count++ : count--;

        this.dbCount.next(count);

    }
}
