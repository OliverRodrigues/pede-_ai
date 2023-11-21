import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lanche';

  menuItems = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'Produtos', icon: 'pi pi-fw pi-list' },
    { label: 'Contato', icon: 'pi pi-fw pi-envelope' }
  ]
}
