import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderCardComponent } from './header-card/header-card.component';

import { ChartsModule } from 'ng2-charts/ng2-charts'
import { MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ChartsModule,
    MatSidenavModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderCardComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderCardComponent
  ]
})
export class ComponentsModule { }
