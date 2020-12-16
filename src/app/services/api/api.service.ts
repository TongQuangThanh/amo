import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { EnvService } from '../env.service';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private httpNative: HTTP
  ) {}

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

  getListRequestRegister(page: number, limit: number, category: string, search: string): Observable<any> {
    const params = new HttpParams().
      set('page', page.toString()).
      set('limit', limit.toString()).
      set('category', category).
      set('search', search).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.feedbacksnew, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getPopupConfig(): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.popupConfig).pipe(
      map(results => results)
    );
  }

  countNotificationUserClick(notificationId:string): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.countNotificationConfig + notificationId).pipe(
      map(results => results)
    );
  }

  countUserButtonPost(postId:string): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.countPostClick + postId).pipe(
      map(results => results)
    );
  }

  countUserPopupConfigClick(popupId:string): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.countPopupConfigClick + popupId).pipe(
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

  addFeedbackNew(params: any): Observable<any> {
    return this.http.post(EnvService.feedbacknew_addnew, params).pipe(
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

  addApartmentToUser(activeCode:string): Observable<any> {
    const params = {
      apartment: activeCode
    }
    return this.http.post(EnvService.apartment, params).pipe(
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

  uploadImage(payload:any): Observable<any>{
    // const token = localStorage.getItem('token');
    // const headers = {
    //   Authorization: 'Bearer ' + token
    // };
    //this.httpNative.post(EnvService.media_addFile, payload, headers);
  
    
    return this.http.post(EnvService.media_addFile, payload).pipe(
      map(results => results)
    );
  }

  getDataServicePromotionCode(): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.servicePromotionCode, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getDataServiceShopProduct(search_id: string): Observable<any> {
    const params = new HttpParams().
      set('requestShopProduct', search_id).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.serviceShopProduct, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getDataUserShop(page: number, limit: number, search: string): Observable<any> {
    const params = new HttpParams().
      set('page', page.toString()).
      set('limit', limit.toString()).
      set('search', search).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.getUserShopTopData, {
      params
    }).pipe(
      map(results => results)
    );
  }
  getDataUserShopByCategory(page: number, limit: number, category: any): Observable<any> {
    const params = new HttpParams().
      set('page', page.toString()).
      set('limit', limit.toString()).
      set('category', category).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.getUserShopByCategory, {
      params
    }).pipe(
      map(results => results)
    );
  }

  getDataShopProductCategory(): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.getShopProductCategory, {
      params
    }).pipe(
      map(results => results)
    );
  }
  postRequestionCreateUserShop(category:string, title:string, note:string): Observable<any> {
    const params = {
      category, title, note
    }
    return this.http.post(EnvService.getUserShop, params).pipe(
      map(results => results)
    );
  }
  postRequestionOrderProduct(orderInfor:any, paymentMode:any, appartment:any, timeDeliver:any, phone:any, note:any, requestShopProduct: any, address:any, latlng:any): Observable<any> {
    const params = {
      orderInfor,
      paymentMode,
      appartment,
      timeDeliver,
      phone,
      note,
      requestShopProduct,
      address,
      latlng
    }
    return this.http.post(EnvService.getOrderHistory, params).pipe(
      map(results => results)
    );
  }
  putOrderProductRateStarUser(orderHistoryId:any, stars:any, userComment:any): Observable<any> {
    const params = {
      orderHistoryId,
      stars,
      userComment
    }
    return this.http.put(EnvService.putOrderHistoryRateStarUser, params).pipe(
      map(results => results)
    );
  }
  putOrderProductRateStarShop(orderHistoryId:any, stars:any, provideComment:any): Observable<any> {
    const params = {
      orderHistoryId,
      stars,
      provideComment
    }
    return this.http.put(EnvService.putOrderHistoryRateStarShop, params).pipe(
      map(results => results)
    );
  }
  putOrderProductCancelUser(orderHistoryId:any): Observable<any> {
    const params = {
      orderHistoryId
    }
    return this.http.put(EnvService.putOrderHistoryCancelUser, params).pipe(
      map(results => results)
    );
  }
  putOrderProductCancelProvider(orderHistoryId:any): Observable<any> {
    const params = {
      orderHistoryId
    }
    return this.http.put(EnvService.putOrderHistoryCancelProvider, params).pipe(
      map(results => results)
    );
  }
  getListOrderHistorys(): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.getOrderHistory, {
      params
    }).pipe(
      map(results => results)
    );
  }
  getListOrderHistorysByProvider(): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.getOrderHistoryByProvider, {
      params
    }).pipe(
      map(results => results)
    );
  }
  getListOrderHistoryComment(orderHistoryId: any): Observable<any> {
    const params = new HttpParams().
      set('orderHistoryId', orderHistoryId).
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.orderHistoryComment, {
      params
    }).pipe(
      map(results => results)
    );
  }
  postOrderHistoryComment(params: any): Observable<any> {
    return this.http.post(EnvService.orderHistoryComment, params).pipe(
      map(results => results)
    );
  }
  getDataCheckShopOwner(): Observable<any> {
    const params = new HttpParams().
      set('_v', (new Date()).getTime().toString());
    return this.http.get(EnvService.getUserShopCheckShopOwner, {
      params
    }).pipe(
      map(results => results)
    );
  }
  putOrderHistoryProviderFinish(orderHistoryId:any): Observable<any> {
    const params = {
      orderHistoryId
    }
    return this.http.put(EnvService.putOrderHistoryProviderFinish, params).pipe(
      map(results => results)
    );
  }
  putOrderHistoryProviderConfirm(orderHistoryId:any): Observable<any> {
    const params = {
      orderHistoryId
    }
    return this.http.put(EnvService.putOrderHistoryProviderConfirm, params).pipe(
      map(results => results)
    );
  }
  putOrderHistoryUserConfirm(orderHistoryId:any): Observable<any> {
    const params = {
      orderHistoryId
    }
    return this.http.put(EnvService.putOrderHistoryUserConfirm, params).pipe(
      map(results => results)
    );
  }
  putOrderHistoryUserComplain(orderHistoryId:any, userComplain: any): Observable<any> {
    const params = {
      orderHistoryId,
      userComplain
    }
    return this.http.put(EnvService.putOrderHistoryUserComplain, params).pipe(
      map(results => results)
    );
  }

  addApartmentMember(params: any): Observable<any> {
    return this.http.post(EnvService.apartmentMember, params).pipe(
      map(results => results)
    );
  }
  deleteApartmentMember(params: any): Observable<any> {
    return this.http.request('delete', EnvService.apartmentMember, { body: params }).pipe(
      map(results => results)
    );
  }

  deleteApartmentVehicle(params: any): Observable<any> {
    return this.http.request('delete', EnvService.apartmentVehicle, { body: params }).pipe(
      map(results => results)
    );
  }

  getListPaymentCategory(): Observable<any> {
    return this.http.get(EnvService.paymentCategory, {}).pipe(
      map(results => results)
    );
  }

  postPayTheBill(params: any): Observable<any> {
    return this.http.post(EnvService.paymentLog, params).pipe(
      map(results => results)
    );
  }

  postUserComment(params: any): Observable<any> {
    return this.http.post(EnvService.userComment, params).pipe(
      map(results => results)
    );
  }

  postUpdateAvatar(params: any): Observable<any> {
    return this.http.post(EnvService.updateAvatar, params).pipe(
      map(results => results)
    );
  }

}
