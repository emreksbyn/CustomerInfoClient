import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { TelephoneNumber } from '../models/telephoneNumber';

@Injectable({
  providedIn: 'root'
})
export class TelephoneNumberService {

  apiUrl: string = "http://localhost:5041/api/TelephoneNumbers/";

  constructor(private httpClient: HttpClient) { }

  getByCustomerId(customerId: number): Observable<ListResponseModel<TelephoneNumber>> {
    let newPath = this.apiUrl + "get-by-customerId?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<TelephoneNumber>>(newPath);
  }

  add(telephoneNumber: TelephoneNumber): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "create", telephoneNumber);
  }

  update(telephoneNumber: TelephoneNumber): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + "update", telephoneNumber)
  }

  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "delete?id=" + id);
  }
}
