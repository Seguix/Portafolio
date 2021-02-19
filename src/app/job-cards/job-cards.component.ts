import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-cards',
  templateUrl: './job-cards.component.html',
  styleUrls: ['./job-cards.component.scss']
})
export class JobCardsComponent implements OnInit {
  public projects = [
    {
      name: 'RGA', url: 'https://rga-app.herokuapp.com/', img: ['src\assets\images\rga-1.PNG'],
      description: 'Estudios a distancia', repo: 'https://github.com/TheRogerize/RGA_ToolApp',
      languages: ['assets/svg/html.svg', 'assets/svg/css.svg', 'assets/svg/js.svg', 'assets/svg/vuejs.svg', 'assets/svg/vuetify.svg']
    },
    // {
    //   name: 'RGA', url: 'https://rga-app.herokuapp.com/', img: ['src\assets\images\rga-1.PNG'], 
    //   description: 'Estudios a distancia', 
    //   languages: ['assets/svg/html.svg', 'assets/svg/css.svg', 'assets/svg/js.svg', 'assets/svg/vuejs.svg', 'assets/svg/vuetify.svg']
    // },
    // {
    //   name: 'RGA', url: 'https://rga-app.herokuapp.com/', img: ['src\assets\images\rga-1.PNG'], 
    //   description: 'Estudios a distancia', 
    //   languages: ['assets/svg/html.svg', 'assets/svg/css.svg', 'assets/svg/js.svg', 'assets/svg/vuejs.svg', 'assets/svg/vuetify.svg']
    // },
    // {
    //   name: 'RGA', url: 'https://rga-app.herokuapp.com/', img: ['src\assets\images\rga-1.PNG'], 
    //   description: 'Estudios a distancia', 
    //   languages: ['assets/svg/html.svg', 'assets/svg/css.svg', 'assets/svg/js.svg', 'assets/svg/vuejs.svg', 'assets/svg/vuetify.svg']
    // },
    // {
    //   name: 'RGA', url: 'https://rga-app.herokuapp.com/', img: ['src\assets\images\rga-1.PNG'], 
    //   description: 'Estudios a distancia', 
    //   languages: ['assets/svg/html.svg', 'assets/svg/css.svg', 'assets/svg/js.svg', 'assets/svg/vuejs.svg', 'assets/svg/vuetify.svg']
    // },
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
