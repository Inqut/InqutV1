import { EventData, Page } from '@nativescript/core';
import { StudioDashboardViewModel } from './studio-dashboard-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new StudioDashboardViewModel();
}