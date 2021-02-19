import { Component, OnInit } from '@angular/core';

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  public medias = [
    {
      name: this.faFacebook, url: 'https://www.facebook.com/guido.martinez.9', class: 'fa-facebook',
    },
    {
      name: this.faInstagram, url: 'https://www.instagram.com/guido_sebas/', class: 'fa-instagram',
    },
    {
      name: this.faTwitter, url: 'https://twitter.com/Seguix4', class: 'fa-twitter',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
