import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title : string = 'Servicio a la Navegación en el Espacio Aéreo Mexicano';

  constructor() { }

  ngOnInit(): void {
  }

}
