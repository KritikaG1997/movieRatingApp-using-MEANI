import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userUrl } from 'src/environments/environment';
import { movieUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  loginUser(data: any) {
    return this.http.post(`${userUrl}/login`, data);
  };

  signupUser(data: any) {
    return this.http.post(`${userUrl}/signup`, data);
  };

  getAllMovies() {
    return this.http.get(`${movieUrl}/`);
  };

  addMovie(data: any) {
    return this.http.post(`${movieUrl}/add`, data, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    });
  };

  rateToMovie(id: any) {
    return this.http.post(`${movieUrl}/rate/${id}`, null, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    });
  };

  delete(id: any) {
    return this.http.delete(`${movieUrl}/delete/${id}`, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    });
  };

  editMovie(data: any, id: any) {
    return this.http.put(`${movieUrl}/edit/${id}`, data, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    });
  };

}
