import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-cards',
  templateUrl: './job-cards.component.html',
  styleUrls: ['./job-cards.component.scss']
})
export class JobCardsComponent implements OnInit {
  public projects = [
    {
      name: 'RGA', url: 'https://rga-app.herokuapp.com/', img: 'assets/images/rga-1.PNG',
      description: 'RGA es una aplicación web destinada a profesores, estudiantes y universidades.', 
      repo: 'https://github.com/TheRogerize/RGA_ToolApp',
      languages: ['assets/svg/html.svg', 'assets/svg/css.svg', 'assets/svg/js.svg', 'assets/svg/vuejs.svg', 'assets/svg/vuetify.svg']
    },
    {
      name: 'Pokedex', url: 'https://national-pokedex.netlify.app/', img: 'assets/images/pokedex.png',
      description: 'Permite consultar los stats de cualquier Pokemon mediante su nombre o id en la pokedex nacional.',
      repo: 'https://github.com/Seguix/Pokedex',
      languages: ['assets/svg/html.svg', 'assets/svg/scss.svg', 'assets/svg/ts.svg', 'assets/svg/angular.svg']
    },
    {
      name: 'QUIK', url: 'https://quikpago.com/home', img: 'assets/images/quikpwa.png',
      description: 'QUIK es una aplicación web progresiva de delivery que permite comprar, pagar y recibir tu mercado y tus restaurantes favoritos en tu casa, de la manera más fácil y rápida.',
      repo: null,
      languages: ['assets/svg/html.svg', 'assets/svg/scss.svg', 'assets/svg/ts.svg', 'assets/svg/angular.svg', 'assets/svg/firebase.svg']
    },
    {
      name: 'QUIK Aliado', url: 'https://mi.quikpago.com/home', img: 'assets/images/quikaliados.png',
      description: 'QUIK Aliado es una aplicación web progresiva que le permite a los comercios afiliarse a QUIK para gestionar todo lo referente a su comercio.',
      repo: null,
      languages: ['assets/svg/html.svg', 'assets/svg/scss.svg', 'assets/svg/ts.svg', 'assets/svg/angular.svg', 'assets/svg/firebase.svg']
    },
    {
      name: 'QUIK APP', url: 'https://play.google.com/store/apps/details?id=com.meta.quik&hl=es_VE&gl=US', img: 'assets/images/quikapp.png',
      description: 'QUIK es una APP desarrollada en Flutter desplegada en Play Store y App Store, la cual permite comprar, pagar y recibir tu mercado y tus restaurantes favoritos en tu casa, de la manera más fácil y rápida.',
      repo: null,
      languages: ['assets/svg/dart.svg', 'assets/svg/flutter.svg', 'assets/svg/firebase.svg']
    },
    {
      name: 'QUIK Drivers', url: 'https://play.google.com/store/apps/details?id=com.meta.quik&hl=es_VE&gl=US', img: 'assets/images/quikdrivers.png',
      description: 'QUIK Drivers es una APP desarrollada para los conductores afiliados a QUIK en la cual pueden gestionar todos los pedidos asignados, guardias asignadas y muchas más funciones.',
      repo: null,
      languages: ['assets/svg/dart.svg', 'assets/svg/flutter.svg', 'assets/svg/firebase.svg']
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.projects.forEach(element => {
      element.languages.forEach(element => {
        console.log(element)
      });
    })
  }

}
