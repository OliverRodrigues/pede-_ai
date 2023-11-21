import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { TopBarComponent } from './base/top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    MenuModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
