import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { TopBarComponent } from './base/top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonModule } from 'primeng/button';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
