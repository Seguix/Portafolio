import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  public contacts = [
    {
      name: 'Linkedln', url: 'https://www.linkedin.com/in/guido-martinez-631641169/', img: 'assets/images/linkedin.svg', target: '_blank'
    },
    {
      name: 'Correo', url: 'mailto:morilloj723@gmail.com', img: 'assets/images/gmail.png', target: '_self'
    },
    {
      name: 'Workana', url: 'https://www.workana.com/freelancer/69a44fb561363066530192b752f097de', img: 'assets/images/workana.png', target: '_blank'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
