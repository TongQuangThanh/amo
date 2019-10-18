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

  getListPayment(page: number, limit: number, category: string, search: string): Observable<any> {
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

  getPaymentDetail(paymentID: string): Observable<any> {
    return this.http.get(EnvService.paymentDetail + paymentID).pipe(
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

  getRequestDetail(requestID: string): Observable<any> {
    return this.http.get(EnvService.feedbacksDetail + requestID).pipe(
      map(results => results)
    );
  }

  getListServiceGroup(): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.serviceGroup, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getListServiceCategory(servicegroupID: string): Observable<any> {
    const params = new HttpParams().
    set('group', servicegroupID).
    set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.serviceCategory, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getListServiceByGroup(servicesGroupID: string): Observable<any> {
    const params = new HttpParams().
    set('category', servicesGroupID).
    set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.services, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getListServiceLogs(): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.serviceLog, {
      params
    }).pipe(
      map(results => results)
    );
  }

  addServiceLog(params:any): Observable<any> {
    return this.http.post(EnvService.serviceLog, params).pipe(
      map(results => results)
    );
  }

  getServiceDetail(serviceID: string): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.serviceDetail + serviceID, {
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

  getPosteDetail(postID: string): Observable<any> {
    return this.http.get(EnvService.postDetail + postID).pipe(
      map(results => results)
    );
  }

  getUserApartment(): Observable<any> {
    return this.http.get(EnvService.apartment).pipe(
      map(results => results)
    );
  }

}
