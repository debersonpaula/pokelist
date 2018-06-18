import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { PokeCommomModule } from './common/poke-commom.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

import { PokelistService } from './services/pokelist.service';
import { MaterialModule } from './material';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ViewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PokeCommomModule,
    AppRouting,
    MaterialModule,
  ],
  providers: [PokelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
