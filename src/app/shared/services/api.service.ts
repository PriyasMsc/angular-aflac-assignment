import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string;
  private url!: string;
  constructor(
    private http: HttpClient,
    @Inject('Environment') endpointUrl: string
  ) {
    this.baseUrl = endpointUrl;
  }

  getApi(url: any) {
    if (url) {
      return this.http.get(this.baseUrl + url + '.json');
    } else {
      return false;
    }
  }
}
