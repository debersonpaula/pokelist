import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ViewerComponent } from './viewer/viewer.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { pagename: 'Home' } },
  { path: 'list', component: ListComponent, data: { pagename: 'PokeList' } },
  { path: 'view', component: ViewerComponent, data: { pagename: 'PokeView' } },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting { }
