import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isHome = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  clkArtigos() {
    this.isHome = false;
    this.router.navigate(['/artigos']);
  }

}
