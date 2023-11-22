import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayPedido: boolean = false;

  abrirDialog() {
    this.displayPedido = true;
  }


  ngOnInit(): void {

  }


}
