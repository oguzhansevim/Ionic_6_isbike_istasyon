import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  data: Observable<any>;

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return new Promise(resolve => {
      this.data = this.httpClient.get(environment.endPoint);
      this.data.subscribe(data => resolve(data));
    });
  }
}
