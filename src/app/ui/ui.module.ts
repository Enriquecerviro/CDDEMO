import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ClarityModule//IMPORTAMOS CD EN HIJO
  ],
  exports : [
    /**
     * HAY QUE EXPORTAR EL C.LAYOUT PORQUE ES LO QUE VA A DEFINIR
     * LA DISPOSICION FINAL DEL UI(engloba header/sidebar/main)
     */
    LayoutComponent
  ]
})
export class UiModule { }
