import { EventData, Page } from '@nativescript/core';
import { TabsViewModel } from './tabs-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new TabsViewModel();
}