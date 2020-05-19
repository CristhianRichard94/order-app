import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../shared/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class LayoutComponent implements OnInit {
  isLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

}
