import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient) {}

  getListArticle(page: number, limit: number, category: string, search: string): Observable<any> {
    const params = new HttpParams().
      set('page', page.toString()).
      set('limit', limit.toString()).
      set('category', category).
      set('search', search).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.articles, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getArticleDetail(articleID: string): Observable<any> {
    return this.http.get(EnvService.articlesDetail + articleID).pipe(
      map(results => results)
    );
  }

  getListPaymentLog(page: number, limit: number, category: string, search: string): Observable<any> {
    const params = new HttpParams().
      set('page', page.toString()).
      set('limit', limit.toString()).
      set('category', category).
      set('search', search).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.payments, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getListRequest(page: number, limit: number, category: string, search: string): Observable<any> {
    const params = new HttpParams().
      set('page', page.toString()).
      set('limit', limit.toString()).
      set('category', category).
      set('search', search).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.feedbacks, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getPosts(page: number, limit: number, category: string, search: string): Observable<any> {
    const params = new HttpParams().
      set('page', page.toString()).
      set('limit', limit.toString()).
      set('search', search).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.getPost, {
      params
    }).pipe(
      map(results => results)
    );
  }
}
