import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  constructor(private http: HttpClient) { }

  artigosUrl = 'http://localhost:3000/artigos';


  pesquisar(): Observable<any> {
    return this.http.get(`${this.artigosUrl}`);
  }
}
