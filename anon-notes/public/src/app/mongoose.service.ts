import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";
@Injectable()

export class MongooseService {
  constructor(private _http: Http) { }
  retrieveAll() {
    return this._http.get('/products')
    .map( data => data.json() )
    .toPromise();
  }
  retrieveOne(id) {
    return this._http.get('/products/${id}')
    .map( data => data.json() )
    .toPromise();
  }
  create(body) {
    return this._http.post('/products', body)
    .map(data => data.json())
    .toPromise();
  }
  update(body, id) {
    return this._http.put('/products/${id}', body)
    .map( data => data.json() )
    .toPromise();
  }
  destroy(id) {
    console.log(id)
    return this._http.delete('/products/' + id)
    .map( data => data.json() )
    .toPromise();
  }
}
