import { Observable } from '@nativescript/core';

export class TabsViewModel extends Observable {
    private _selectedIndex: number;

    constructor() {
        super();
        this._selectedIndex = 0;
    }

    get selectedIndex(): number {
        return this._selectedIndex;
    }

    set selectedIndex(value: number) {
        if (this._selectedIndex !== value) {
            this._selectedIndex = value;
            this.notifyPropertyChange('selectedIndex', value);
        }
    }
}