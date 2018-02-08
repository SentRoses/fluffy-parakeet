import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  @Input() title;

  isCollapsed = false;

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  };
  
}
