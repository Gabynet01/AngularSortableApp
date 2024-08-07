import { Routes } from '@angular/router';

import { SortableTableComponent } from './sortable-table/sortable-table.component';

export const routes: Routes = [
  { path: '', component: SortableTableComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect any unknown path to the default route
];
