import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { ToolbarAComponent } from '../toolbar-a/toolbar.component';
import {
  SidebarBodyComponent, SidebarComponent as EmrSidebarComponent,
  SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent,
  SidebarNavItemComponent
} from '@elementar-ui/components/sidebar';
import { LogoComponent } from '@elementar-ui/components/logo';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    ToolbarAComponent,
    SidebarFooterComponent,
    SidebarNavItemComponent,
    SidebarNavComponent,
    SidebarBodyComponent,
    LogoComponent,
    SidebarHeaderComponent,
    EmrSidebarComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  router = inject(Router);
  location = inject(Location);
  height: string | null = '200px';

  navItems: any[] = [
    {
      key: 'home',
      type: 'link',
      name: 'Dashboard',
      icon: 'home',
      link: '/'
    },
    {
      key: 'reports',
      type: 'item',
      icon: 'equalizer',
      name: 'Reports',
    },
    {
      key: 'settings',
      type: 'item',
      icon: 'settings',
      name: 'Settings',
    }
  ];
  navItemLinks: any[] = [];
  activeKey: string | null = 'home';

  ngOnInit() {
    this.navItems.forEach(navItem => {
      this.navItemLinks.push(navItem);

      if (navItem.children) {
        this.navItemLinks = this.navItemLinks.concat(navItem.children as any[]);
      }
    });
    this._activateLink();
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this._activateLink();
      })
    ;
  }

  private _activateLink() {
    const activeLink = this.navItemLinks.find(
      navItem =>
        navItem.link === this.location.path() ||
        navItem.link === '/' && this.location.path() === ''
    );

    if (activeLink) {
      this.activeKey = activeLink.key;
    } else {
      this.activeKey = null;
    }
  }
}
