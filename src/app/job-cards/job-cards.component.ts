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
