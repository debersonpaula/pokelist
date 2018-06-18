import { NgModule } from '@angular/core';
import { MaterialModule } from '../material';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
  ]
})
export class PokeCommomModule { }
