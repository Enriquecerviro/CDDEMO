import { Component, OnInit } from '@angular/core';

//TODO: FALLA EL DROPDOWN
@Component({
  selector: 'app-header',
  template: `
        <header class="header-1">
          <div class="branding">
            <a class="nav-link">
              <clr-icon shape="shield"></clr-icon>
              <span class="title">Angular CLI</span>
            </a>
          </div>
          <div class="header-nav">
            <a class="active nav-link nav-icon">
              <clr-icon shape="home"></clr-icon>
            </a>
            <a class=" nav-link nav-icon">
              <clr-icon shape="cog"></clr-icon>
            </a>
          </div>
          <form class="search">
            <label for="search_input">
              <input id="search_input" type="text" placeholder="Search for keywords...">
            </label>
          </form>
          <div class="header-actions">
          <clr-dropdown [clrCloseMenuOnItemClick]="false">
            <button clrDropdownTrigger aria-label="Dropdown demo button">
              <clr-icon shape="error" class="is-error" size="24"></clr-icon>
              <clr-icon shape="caret down"></clr-icon>
            </button>
            <clr-dropdown-menu *clrIfOpen>
                <label class="dropdown-header" aria-hidden="true">Dropdown header</label>
                <div aria-label="Dropdown header Action 1" clrDropdownItem>Action 1</div>
                <div aria-label="Dropdown header Action 2"  clrDropdownItem>Action 2</div>
                <div clrDropdownItem>Link 1</div>
                <div clrDropdownItem>Link 2</div>
                <div class="dropdown-divider" role="separator" aria-hidden="true"></div>
            </clr-dropdown-menu>
          </clr-dropdown>
          </div>
        </header>
        <nav class="subnav">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Reports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Users</a>
            </li>
          </ul>
        </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
