import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiUrl: string = "http://localhost:5041/api/Addresses/";

  constructor(private httpClient: HttpClient) { }

  getByCustomerId(customerId: number): Observable<ListResponseModel<Address>> {
    let newPath = this.apiUrl + "get-by-customerId?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<Address>>(newPath);
  }

  add(address: Address): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "create", address);
  }

  update(address: Address): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + "update", address)
  }

  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "delete?id=" + id);
  }
}