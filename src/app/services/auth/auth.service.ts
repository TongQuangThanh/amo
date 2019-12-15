import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from '../env.service';
import { User } from '../../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token: any;

  constructor(
    private http: HttpClient,
    // private storage: NativeStorage,
  ) { }

  login(phone: string, password: string) {
    const self = this;
    return this.http.post(EnvService.login,
      {phone, password}
    ).pipe(
      tap(async (token) => {
        // await self.storage.setItem('token', token);
        localStorage.setItem('token', token['token']);
        localStorage.setItem('profile', JSON.stringify(token['profile']));
        
        self.token = token;
        self.isLoggedIn = true;
        return token;
      }),
    );
  }

  register(fName: string, lName: string, email: string, password: string) {
    return this.http.post(EnvService.register,
      {
        fName,
        lName,
        email,
        password
      }
    ).pipe(
      tap(result => {
        return result;
      })
    );;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    this.isLoggedIn = false;
    delete this.token;
  }

  user() {
    const headers = new HttpHeaders({
      Authorization: this.token.token_type + ' ' + this.token.access_token
    });

    return this.http.get<User>(EnvService.apartmentUser, { headers })
    .pipe(
      tap(user => {
        return user;
      })
    );
  }

  getProfile() {
    if(localStorage.getItem('token')){
      const profile = JSON.parse(localStorage.getItem('profile'));
      return profile;
    }
    return null;
  }

  getToken() {
    this.token = localStorage.getItem('token');
    // return this.storage.getItem('token').then(data => {
    //   this.token = data;
    if (this.token != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      this.token = null;
    }
    return this.token;
    // });
  }

  getListArticle() {
    const params = new HttpParams().
      set('page', '1').
      set('limit', '10').
      set('category', '').
      set('search', '').
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.articles, {
      params
    }).pipe(
      map(results => {
        console.log(results);
      })
    );
  }
}
