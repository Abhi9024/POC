import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/table-list', title: 'TestController',  icon:'design_bullet-list-67', class: '' },
    { path: '/testscripts', title: 'TestScripts',  icon:'design_bullet-list-67', class: '' },
    { path: '/keywords', title: 'Keywords',  icon:'design_bullet-list-67', class: '' },
    { path: '/repository', title: 'Repository',  icon:'design_bullet-list-67', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  globalService:any;
  showItems = true;

  constructor(private globalsvc:GlobalService ) { 
      this.globalService=globalsvc;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
