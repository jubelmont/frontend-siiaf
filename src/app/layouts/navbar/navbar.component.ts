import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public preTitle: string = 'Sistema Integral de Información Administrativa y Financiera';
  public postTitle: string = 'SIIAF';

  constructor() { }

  ngOnInit(): void {
  }

}
