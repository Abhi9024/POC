import { Component, OnInit } from '@angular/core';

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

  showItems = true;

  constructor() { }

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
