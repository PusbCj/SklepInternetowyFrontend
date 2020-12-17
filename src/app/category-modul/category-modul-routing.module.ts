import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryModulComponent } from './category-modul.component';

const routes: Routes = [{ path: ':id', component: CategoryModulComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryModulRoutingModule { }
