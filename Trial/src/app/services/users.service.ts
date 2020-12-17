import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:8000/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(url) {
    return this.http.get(baseUrl+url)
  }

  get(url,id) {
    return this.http.get(`${baseUrl}${url}/${id}`);
  }

  create(url,data) {
    return this.http.post(baseUrl+url, data)
  }

  delete(url,id) {
    return this.http.delete(`${baseUrl}${url}/${id}`)
  }
}
