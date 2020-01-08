import { Component, OnInit } from '@angular/core';
import {ArtigoService} from '../../base/base-core/artigos/artigo.service';

@Component({
  selector: 'app-artigos-list',
  templateUrl: './artigos-list.component.html',
  styleUrls: ['./artigos-list.component.scss']
})
export class ArtigosListComponent implements OnInit {

  artigos: any = [''];
  artigo;
  constructor(
    private artigoService: ArtigoService
  ) { }

  ngOnInit() {
    this.buscarArtigos();
  }

  buscarArtigos() {
    this.artigoService.pesquisar().subscribe(result => {
      this.artigos = result;
      if (this.artigos) {
        this.artigo = this.artigos[0];
      }
    });
  }

  selectList(index) {
    this.artigo = this.artigos[index];
  }

  get backgroundImage() {
    if (this.artigo) {
      return `url(\'${this.artigo.imageUri}\')`;
    }
    return '';
  }

}
