import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:3333';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  create(store) {
    return this.http.post(`${baseUrl}/store`, store);
  }
  
  show() {
    return this.http.get(`${baseUrl}/store`);
  }
  
  update(id, name) {
    return this.http.patch(`${baseUrl}/store/${id}`, { name });
  }
  
  destroy(id) {
    return this.http.delete(`${baseUrl}/store/${id}`);
  }
}
