import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = "http://localhost:5041/api/Customers/";

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "get-all";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  add(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "create", customer)
  }

  update(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + "update", customer)
  }

  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "delete-with-dependent?id=" + id)
  }
}