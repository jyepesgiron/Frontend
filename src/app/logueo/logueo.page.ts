import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.page.html',
  styleUrls: ['./logueo.page.scss'],
})
export class LogueoPage implements OnInit {

  constructor(private enlace: Router) { }

  ngOnInit() {
  }

  Gestion(){
    this.enlace.navigate(['/Gestion']);
  }

  Funcion(){
    this.enlace.navigate(['/Funcion']);
  }

}