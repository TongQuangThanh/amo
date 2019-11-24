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
  
  getListArticleComment(page: number, limit: number, article:string, search: string): Observable<any> {
    const params = new HttpParams().
      set('page', page.toString()).
      set('limit', limit.toString()).
      set('article', article).
      set('search', search).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.articlesComment, {
      params
    }).pipe(
      map(results => results)
    );
  }
  
  sendArticleComment(params: any, articleID:string): Observable<any> {
    return this.http.post(EnvService.addArticlesComment + articleID, params).pipe(
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

  getListPaymentComment(paymentBill:string): Observable<any> {
    const params = new HttpParams().
      set('paymentBill', paymentBill).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.paymentComment, {
      params
    }).pipe(
      map(results => results)
    );
  }
  
  sendPaymentComment(params: any): Observable<any> {
    return this.http.post(EnvService.paymentComment, params).pipe(
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

  getFeedbackCategory(apartmentID:string): Observable<any> {
    const params = new HttpParams().
      set('apartment', apartmentID).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.feedbacksCategory, {params}).pipe(
      map(results => results)
    );
  }

  addFeedback(params: any): Observable<any> {
    return this.http.post(EnvService.feedback_addnew, params).pipe(
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

  getListUserApartment(): Observable<any> {
    return this.http.get(EnvService.apartment).pipe(
      map(results => results)
    );
  }

  getUserApartment(apartmentID): Observable<any> {
    return this.http.get(EnvService.apartmentDetail + apartmentID).pipe(
      map(results => results)
    );
  }

  getUserProfile(): Observable<any> {
    return this.http.get(EnvService.updateProfile).pipe(
      map(results => results)
    );
  }

  updateUserProfile(params:any): Observable<any> {
    return this.http.put(EnvService.updateProfile, params).pipe(
      map(results => results)
    );
  }

  changePassword(params:any): Observable<any> {
    return this.http.put(EnvService.changePassword, params).pipe(
      map(results => results)
    );
  }

  resetPassword(params:any): Observable<any> {
    return this.http.post(EnvService.resetPassword, params).pipe(
      map(results => results)
    );
  }

  settingNotification(params:any): Observable<any> {
    return this.http.post(EnvService.notification, params).pipe(
      map(results => results)
    );
  }

  forgotPassword(phoneNumber:string): Observable<any> {
    return this.http.post(EnvService.forgotPassword, {phone: phoneNumber}).pipe(
      map(results => results)
    );
  }

  verifyTokenCode(phone:string, token:string): Observable<any> {
    const params = {
      phone,
      token
    }
    return this.http.post(EnvService.confirmTokenCode, params).pipe(
      map(results => results)
    );
  }

  resentRegisterCode(phone:string): Observable<any> {
    const params = {
      phone
    }
    return this.http.post(EnvService.register, params).pipe(
      map(results => results)
    );
  }

  confirmRegisterCode(phone:string, code:string): Observable<any> {
    const params = {
      phone,
      code
    }
    return this.http.post(EnvService.confirmSMSCode, params).pipe(
      map(results => results)
    );
  }

  confirmApartmentCode(phone:string, ref:string, token:string, password:string): Observable<any> {
    const params = {
      phone,
      ref,
      password,
      code:token
    }
    return this.http.post(EnvService.confirm, params).pipe(
      map(results => results)
    );
  }

  userClickStatistic(screenID: string):Observable<any>{
    return this.http.get(EnvService.userStatistic + screenID).pipe(
      map(results => results)
    );
  }

  getListFeedbackReply(feedbackID:string): Observable<any>{
    const params = new HttpParams().
      set('page', "1").
      set('limit', "20").
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.feedback_reply + feedbackID, {params}).pipe(
      map(results => results)
    );
  }

  addFeedbackReply(feedbackID:string, params:any): Observable<any>{
    return this.http.post(EnvService.feedback_reply + feedbackID, params).pipe(
      map(results => results)
    );
  }
}
