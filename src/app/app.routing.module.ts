import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'admin/repository',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }]},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
