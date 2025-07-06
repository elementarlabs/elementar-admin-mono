import { Component, inject, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { NotificationsPopoverComponent } from '../notifications-popover/notifications-popover.component';
import { DicebearComponent } from '@elementar-ui/components/avatar';
import { SoundEffectDirective } from '@elementar-ui/components/core';
import { PopoverTriggerForDirective } from '@elementar-ui/components/popover';
import { LayoutApiService } from '@elementar-ui/components/layout';
import {
  ColorSchemeDarkDirective,
  ColorSchemeLightDirective,
  ColorSchemeSwitcherComponent
} from '@elementar-ui/components/color-scheme';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatIconButton,
    MatBadge,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    DicebearComponent,
    MatDivider,
    MatTooltip,
    SoundEffectDirective,
    NotificationsPopoverComponent,
    PopoverTriggerForDirective,
    ColorSchemeDarkDirective,
    ColorSchemeLightDirective,
    ColorSchemeSwitcherComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    'class': 'block w-full h-full'
  }
})
export class HeaderComponent {
  private _layoutApi = inject(LayoutApiService);

  @Input()
  sidebarHidden = false;

  toggleSidebar(): void {
    if (!this.sidebarHidden) {
      this._layoutApi.hideSidebar('root');
    } else {
      this._layoutApi.showSidebar('root');
    }

    this.sidebarHidden = !this.sidebarHidden;
  }
}
