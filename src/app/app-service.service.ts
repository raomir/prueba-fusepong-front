import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private header;
  private url;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    this.url = 'http://localhost:3000';
  }

  categorias(data): Observable<any> {
    return this.http.post(this.url + '/productos', JSON.stringify(data), {headers: this.header});
  }

  listarMarca(): Observable<any> {
    return this.http.get(this.url + '/marcas', {headers: this.header});
  }

  obtenerProductos(id): Observable<any> {
    return this.http.get(this.url + '/productos/' + id, {headers: this.header});
  }
}
