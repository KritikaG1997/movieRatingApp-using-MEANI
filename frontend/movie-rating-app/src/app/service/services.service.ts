import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userUrl } from 'src/environments/environment';
import { movieUrl } from 'src/environments/environment';
import { Observable, Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  private _refreshRequired = new Subject<void>();

  get Refresh() {
    return this._refreshRequired
  }

  loginUser(data: any) {
    return this.http.post(`${userUrl}/login`, data);
  };

  signupUser(data: any) {
    return this.http.post(`${userUrl}/signup`, data);
  };

  getAllMovies(): Observable<object> {
    return this.http.get(`${movieUrl}/`);
  };

  getMovieById(id: any): Observable<object> {
    return this.http.get(`${movieUrl}/get/${id}`);
  };

  addMovie(data: any) {
    return this.http.post(`${movieUrl}/add`, data, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    }).pipe(
      tap(() => {
        this.Refresh.next();
      })
    )
  };

  rateToMovie(id: any) {
    return this.http.post(`${movieUrl}/rate/${id}`, null, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    }).pipe(
      tap(() => {
        this.Refresh.next();
      })
    );
  };

  delete(id: any) {
    return this.http.delete(`${movieUrl}/delete/${id}`, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    }).pipe(
      tap(() => {
        this.Refresh.next();
      })
    );
  };

  editMovie(data: any, id: any) {
    return this.http.put(`${movieUrl}/edit/${id}`, data, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    }).pipe(
      tap(() => {
        this.Refresh.next();
      })
    );
  };

  addCasts(id: any, data: any) {
    console.log(data,"data");
    
    return this.http.put(`${movieUrl}/addcast/${id}`, data, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    }).pipe(
      tap(() => {
        this.Refresh.next();
      })
    );
  };

  changePass(data: any) {
    return this.http.put(`${userUrl}/password`, data, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    });
  };

  profile() {
    return this.http.get(`${userUrl}/profile`, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    });
  };

  getPostById(): Observable<object> {
    return this.http.get(`${movieUrl}/list`, {
      headers: new HttpHeaders(
        { 'authorization': `${localStorage.getItem("userToken")}` }
      )
    });
  };

}
