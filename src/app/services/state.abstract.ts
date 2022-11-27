// for page state
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { clone } from '../core/common';
import { debug } from '../core/rxjs.operators';
import { IListItem } from '../models/list.model';


// @Injectable()
export class ListStateService<T extends IListItem>  {

    protected stateList: BehaviorSubject<T[]> = new BehaviorSubject([]);
    stateList$: Observable<T[]> = this.stateList.asObservable();

    constructor(level?: string) {
        _seqlog('list state construct');

        if (level === 'DEBUG') {
            // default dont debug
            this.stateList$ = this.stateList$.pipe(
                debug(this.constructor.name)
            );

        }

    }
    get currentList(): T[] {
        return this.stateList.getValue();
    }

    SetList(list: T[]): Observable<T[]> {
        this.stateList.next(list);
        return this.stateList$;
    }

    appendList(list: T[]): Observable<T[]> {
        return this.SetList([...this.currentList, ...list]);

    }

    emptyList() {
        this.stateList.next([]);
    }


    addItem(item: T): void {
        this.stateList.next([...this.currentList, item]);

    }
    prependItem(item: T): void {
        this.stateList.next([item, ...this.currentList]);
    }

    editItem(item: T): void {
        const currentList = [...this.currentList];
        const index = currentList.findIndex(n => n.id === item.id);
        if (index > -1) {
            currentList[index] = clone(item); // use a proper cloner
            this.stateList.next(currentList);
        }
    }
    removeItem(item: T): void {
        this.stateList.next(this.currentList.filter(n => n.id !== item.id));
    }

}


export class StateService<T>  {

    protected stateItem: BehaviorSubject<T | null> = new BehaviorSubject(null);
    stateItem$: Observable<T | null> = this.stateItem.asObservable();

    constructor(level?: string) {
        _seqlog('state construct');
        if (!level) {
            // default debug
            this.stateItem$ = this.stateItem$.pipe(
             debug(this.constructor.name)
            );
        }

    }

    get currentItem(): T | null {

        return this.stateItem.getValue();
    }

    // return ready observable
    SetState(item: T): Observable<T | null> {
        this.stateItem.next(item);
        return this.stateItem$;
    }

    UpdateState(item: Partial<T>): Observable<T | null> {
        // extend the item first
        const newItem = { ...this.currentItem, ...clone(item) };
        this.stateItem.next(newItem);
        return this.stateItem$;
    }

    RemoveState(): void {
        this.stateItem.next(null);
    }
}
