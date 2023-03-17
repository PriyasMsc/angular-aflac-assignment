import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../../shared/services/api.service';
import { claimsData } from '../../../shared/model/claim';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClaimsStatusService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  getClaimstatusList():any {
    const url = 'submitted-claim';
    return this.apiService.getApi(url);
    //return this.http.get<claimsData[]>('assets/json/' + url + '.json');
  }
}
