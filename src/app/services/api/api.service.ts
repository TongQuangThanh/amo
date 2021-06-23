import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { EnvService } from '../env.service';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private httpNative: HTTP) {}

  getListArticle(page: number, limit: number, category: string, search: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('category', category)
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.articles, {
        params,
      })
      .pipe(map((results) => results));
  }

  getListArticleComment(page: number, limit: number, article: string, search: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('article', article)
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.articlesComment, {
        params,
      })
      .pipe(map((results) => results));
  }

  sendArticleComment(params: any, articleID: string): Observable<any> {
    return this.http.post(EnvService.addArticlesComment + articleID, params).pipe(map((results) => results));
  }

  sendArticleReply(params: any, commentId: string): Observable<any> {
    return this.http.post(EnvService.sendArticleReply + commentId, params).pipe(map((results) => results));
  }

  getArticleDetail(articleID: string): Observable<any> {
    return this.http.get(EnvService.articlesDetail + articleID).pipe(map((results) => results));
  }

  getListPayment(page: number, limit: number, category: string, search: string, status = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('category', category)
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    if (status) {
      params = params.set('filter[status]', status);
    }
    return this.http
      .get(EnvService.payments, {
        params,
      })
      .pipe(map((results) => results));
  }

  getPaymentDetail(paymentID: string): Observable<any> {
    return this.http.get(EnvService.paymentDetail + paymentID).pipe(map((results) => results));
  }

  getListPaymentComment(paymentBill: string): Observable<any> {
    const params = new HttpParams().set('paymentBill', paymentBill).set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.paymentComment, {
        params,
      })
      .pipe(map((results) => results));
  }

  sendPaymentComment(params: any): Observable<any> {
    return this.http.post(EnvService.paymentComment, params).pipe(map((results) => results));
  }

  getListRequest(page: number, limit: number, category: string, search: string, status = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('category', category)
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    if (status) {
      params = params.set('filter[status]', status);
    }
    return this.http
      .get(EnvService.feedbacks, {
        params,
      })
      .pipe(map((results) => results));
  }

  getListRequestRegister(page: number, limit: number, category: string, search: string, status = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('category', category)
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    if (status) {
      params = params.set('filter[status]', status);
    }
    return this.http
      .get(EnvService.feedbacksnew, {
        params,
      })
      .pipe(map((results) => results));
  }

  getPopupConfig(): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.popupConfig).pipe(map((results) => results));
  }

  countNotificationUserClick(notificationId: string): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.countNotificationConfig + notificationId).pipe(map((results) => results));
  }

  countUserButtonPost(postId: string): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.countPostClick + postId).pipe(map((results) => results));
  }

  countUserPopupConfigClick(popupId: string): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.countPopupConfigClick + popupId).pipe(map((results) => results));
  }

  getFeedbackCategory(apartmentID: string): Observable<any> {
    const params = new HttpParams().set('apartment', apartmentID).set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.feedbacksCategory, { params }).pipe(map((results) => results));
  }

  addFeedback(params: any): Observable<any> {
    return this.http.post(EnvService.feedback_addnew, params).pipe(map((results) => results));
  }

  addFeedbackNew(params: any): Observable<any> {
    return this.http.post(EnvService.feedbacknew_addnew, params).pipe(map((results) => results));
  }

  getRequestDetail(requestID: string): Observable<any> {
    return this.http.get(EnvService.feedbacksDetail + requestID).pipe(map((results) => results));
  }

  getRequestNewDetail(requestID: string): Observable<any> {
    return this.http.get(EnvService.feedbacksNewDetail + requestID).pipe(map((results) => results));
  }

  getListServiceGroup(): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.serviceGroup, {
        params,
      })
      .pipe(map((results) => results));
  }

  getListServiceCategory(servicegroupID: string): Observable<any> {
    const params = new HttpParams().set('group', servicegroupID).set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.serviceCategory, {
        params,
      })
      .pipe(map((results) => results));
  }

  getListServiceByGroup(servicesGroupID: string): Observable<any> {
    const params = new HttpParams().set('category', servicesGroupID).set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.services, {
        params,
      })
      .pipe(map((results) => results));
  }

  getListServiceLogs(): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.serviceLog, {
        params,
      })
      .pipe(map((results) => results));
  }

  addServiceLog(params: any): Observable<any> {
    return this.http.post(EnvService.serviceLog, params).pipe(map((results) => results));
  }

  getServiceDetail(serviceID: string): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.serviceDetail + serviceID, {
        params,
      })
      .pipe(map((results) => results));
  }

  getPosts(page: number, limit: number, category: string, search: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.getPost, {
        params,
      })
      .pipe(map((results) => results));
  }

  getPosteDetail(postID: string): Observable<any> {
    return this.http.get(EnvService.postDetail + postID).pipe(map((results) => results));
  }

  getListUserApartment(): Observable<any> {
    return this.http.get(EnvService.apartment).pipe(map((results) => results));
  }

  getUserApartment(apartmentID): Observable<any> {
    return this.http.get(EnvService.apartmentDetail + apartmentID).pipe(map((results) => results));
  }

  getUserProfile(): Observable<any> {
    return this.http.get(EnvService.updateProfile).pipe(map((results) => results));
  }

  updateUserProfile(params: any): Observable<any> {
    return this.http.put(EnvService.updateProfile, params).pipe(map((results) => results));
  }

  changePassword(params: any): Observable<any> {
    return this.http.put(EnvService.changePassword, params).pipe(map((results) => results));
  }

  resetPassword(params: any): Observable<any> {
    return this.http.post(EnvService.resetPassword, params).pipe(map((results) => results));
  }

  settingNotification(params: any): Observable<any> {
    return this.http.post(EnvService.notification, params).pipe(map((results) => results));
  }

  forgotPassword(phoneNumber: string): Observable<any> {
    return this.http.post(EnvService.forgotPassword, { phone: phoneNumber }).pipe(map((results) => results));
  }

  verifyTokenCode(phone: string, token: string): Observable<any> {
    const params = {
      phone,
      token,
    };
    return this.http.post(EnvService.confirmTokenCode, params).pipe(map((results) => results));
  }

  resentRegisterCode(phone: string): Observable<any> {
    const params = {
      phone,
    };
    return this.http.post(EnvService.register, params).pipe(map((results) => results));
  }

  confirmRegisterCode(phone: string, code: string): Observable<any> {
    const params = {
      phone,
      code,
    };
    return this.http.post(EnvService.confirmSMSCode, params).pipe(map((results) => results));
  }

  confirmApartmentCode(phone: string, ref: string, token: string, password: string): Observable<any> {
    const params = {
      phone,
      ref,
      password,
      code: token,
    };
    return this.http.post(EnvService.confirm, params).pipe(map((results) => results));
  }

  addApartmentToUser(activeCode: string): Observable<any> {
    const params = {
      apartment: activeCode,
    };
    return this.http.post(EnvService.apartment, params).pipe(map((results) => results));
  }

  userClickStatistic(screenID: string): Observable<any> {
    return this.http.get(EnvService.userStatistic + screenID).pipe(map((results) => results));
  }

  getListFeedbackReply(feedbackID: string): Observable<any> {
    const params = new HttpParams().set('page', '1').set('limit', '20').set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.feedback_reply + feedbackID, { params }).pipe(map((results) => results));
  }

  getListFeedbackNewReply(feedbackID: string): Observable<any> {
    const params = new HttpParams().set('page', '1').set('limit', '20').set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.feedbacknew_reply + feedbackID, { params }).pipe(map((results) => results));
  }

  addFeedbackReply(feedbackID: string, params: any): Observable<any> {
    return this.http.post(EnvService.feedback_reply + feedbackID, params).pipe(map((results) => results));
  }
  addFeedbackNewReply(feedbackID: string, params: any): Observable<any> {
    return this.http.post(EnvService.feedbacknew_reply + feedbackID, params).pipe(map((results) => results));
  }

  uploadImage(payload: any): Observable<any> {
    // const token = localStorage.getItem('token');
    // const headers = {
    //   Authorization: 'Bearer ' + token
    // };
    //this.httpNative.post(EnvService.media_addFile, payload, headers);

    return this.http.post(EnvService.media_addFile, payload).pipe(map((results) => results));
  }

  getDataServicePromotionCode(): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.servicePromotionCode, {
        params,
      })
      .pipe(map((results) => results));
  }

  getDataServiceShopProduct(search_id: string): Observable<any> {
    const params = new HttpParams().set('requestShopProduct', search_id).set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.serviceShopProduct, {
        params,
      })
      .pipe(map((results) => results));
  }

  getDataUserShop(page: number, limit: number, search: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.getUserShopTopData, {
        params,
      })
      .pipe(map((results) => results));
  }
  getDataUserShopByCategory(page: number, limit: number, category: any): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('category', category)
      .set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.getUserShopByCategory, {
        params,
      })
      .pipe(map((results) => results));
  }

  getDataShopProductCategory(): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.getShopProductCategory, {
        params,
      })
      .pipe(map((results) => results));
  }
  postRequestionCreateUserShop(category: string, title: string, note: string): Observable<any> {
    const params = {
      category,
      title,
      note,
    };
    return this.http.post(EnvService.getUserShop, params).pipe(map((results) => results));
  }
  postRequestionOrderProduct(
    orderInfor: any,
    paymentMode: any,
    appartment: any,
    timeDeliver: any,
    phone: any,
    note: any,
    requestShopProduct: any,
    address: any,
    latlng: any
  ): Observable<any> {
    const params = {
      orderInfor,
      paymentMode,
      appartment,
      timeDeliver,
      phone,
      note,
      requestShopProduct,
      address,
      latlng,
    };
    return this.http.post(EnvService.getOrderHistory, params).pipe(map((results) => results));
  }
  getListOrderHistorys(page: number, limit: number, category: string, search: string, status = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('category', category)
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    if (status) {
      params = params.set('filter[status]', status);
    }
    return this.http
      .get(EnvService.getOrderHistory, {
        params,
      })
      .pipe(map((results) => results));
  }
  getListOrderHistorysByProvider(): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.getOrderHistoryByProvider, {
        params,
      })
      .pipe(map((results) => results));
  }
  getListOrderHistoryComment(orderHistoryId: any): Observable<any> {
    const params = new HttpParams().set('orderHistoryId', orderHistoryId).set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.orderHistoryComment, {
        params,
      })
      .pipe(map((results) => results));
  }
  postOrderHistoryComment(params: any): Observable<any> {
    return this.http.post(EnvService.orderHistoryComment, params).pipe(map((results) => results));
  }
  getDataCheckShopOwner(): Observable<any> {
    const params = new HttpParams().set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.getUserShopCheckShopOwner, {
        params,
      })
      .pipe(map((results) => results));
  }
  putOrderHistoryProviderFinish(orderHistoryId: any): Observable<any> {
    const params = {
      orderHistoryId,
    };
    return this.http.put(EnvService.putOrderHistoryProviderFinish, params).pipe(map((results) => results));
  }
  putOrderHistoryProviderConfirm(orderHistoryId: any): Observable<any> {
    const params = {
      orderHistoryId,
    };
    return this.http.put(EnvService.putOrderHistoryProviderConfirm, params).pipe(map((results) => results));
  }
  putOrderHistoryUserConfirm(orderHistoryId: any): Observable<any> {
    const params = {
      orderHistoryId,
    };
    return this.http.put(EnvService.putOrderHistoryUserConfirm, params).pipe(map((results) => results));
  }
  putOrderHistoryUserComplain(orderHistoryId: any, userComplain: any): Observable<any> {
    const params = {
      orderHistoryId,
      userComplain,
    };
    return this.http.put(EnvService.putOrderHistoryUserComplain, params).pipe(map((results) => results));
  }

  addApartmentMember(params: any): Observable<any> {
    return this.http.post(EnvService.apartmentMember, params).pipe(map((results) => results));
  }
  deleteApartmentMember(params: any): Observable<any> {
    return this.http.request('delete', EnvService.apartmentMember, { body: params }).pipe(map((results) => results));
  }

  deleteApartmentVehicle(params: any): Observable<any> {
    return this.http.request('delete', EnvService.apartmentVehicle, { body: params }).pipe(map((results) => results));
  }

  getListPaymentCategory(): Observable<any> {
    return this.http.get(EnvService.paymentCategory, {}).pipe(map((results) => results));
  }

  postPayTheBill(params: any): Observable<any> {
    return this.http.post(EnvService.paymentLog, params).pipe(map((results) => results));
  }

  postUserComment(params: any): Observable<any> {
    return this.http.post(EnvService.userComment, params).pipe(map((results) => results));
  }

  postUpdateAvatar(params: any): Observable<any> {
    return this.http.post(EnvService.updateAvatar, params).pipe(map((results) => results));
  }

  // ==================  api  ví điện tử ============================
  // đăng kí thông tin mapping account
  registerEpay(): Observable<any> {
    return this.http.post(EnvService.registerEpay, {}).pipe(map((results) => results));
  }
  // lay thong tin tai khoan
  getEpayUser(): Observable<any> {
    return this.http.post(EnvService.getEpayUser, {}).pipe(
      tap(async (result) => {
        if (result && result.user_info) {
          this.setEpayUserStored(result);
        } else {
          this.setEpayUserStored('');
        }
        return result;
      })
    );
  }

  // nap tien vao tk ( cần liên kết tk ngân hang để nạp tiên)
  epayRechargeUrl(amount: number): Observable<any> {
    const params = {
      amount: amount,
    };
    return this.http.post(EnvService.epayRechargeUrl, params).pipe(map((results) => results));
  }

  // thanh toan tiền
  epaypayment(amount: number): Observable<any> {
    const params = {
      amount: amount,
    };
    return this.http.post(EnvService.epaypayment, params).pipe(map((results) => results));
  }

  // xac nhan hoặc hủy thanh toan tiền : 1: xác nhận thanh toán, -1: hủy thanh toán
  epayPageApproved(status: number, transId: string): Observable<any> {
    const params = {
      confirm_stt: status,
      trans_id: transId,
    };
    return this.http.post(EnvService.epayPageApproved, params).pipe(map((results) => results));
  }

  getEpayUserStored() {
    const epayUser = localStorage.getItem('epay-user-stored');
    if (!epayUser) {
      return null;
    }
    return JSON.parse(epayUser);
  }

  setEpayUserStored(data) {
    localStorage.setItem('epay-user-stored', JSON.stringify(data || ''));
  }

  postPostLike(postId, statusLike): Observable<any> {
    return this.http.post(EnvService.postLike + postId, { statusLike }).pipe(map((results) => results));
  }

  sendPostComment(params: any, articleID: string): Observable<any> {
    return this.http.post(EnvService.addPostComment + articleID, params).pipe(map((results) => results));
  }

  sendPostReply(params: any, articleID: string): Observable<any> {
    return this.http.post(EnvService.addPostCommentReply + articleID, params).pipe(map((results) => results));
  }

  postArticleLike(articleId, statusLike): Observable<any> {
    return this.http.post(EnvService.articleLike + articleId, { statusLike }).pipe(map((results) => results));
  }

  getBanner(): Observable<any> {
    return this.http.get(EnvService.getBanner, {}).pipe(map((results) => results));
  }

  // ========================== Service shop V2 API's ===================================== //
  // Shop house category list
  getListShopHouseCateV2(): Observable<any> {
    return this.http.get(EnvService.shopHouseCategoryV2, {}).pipe(map((results) => results));
  }
  // Shop house sub categories list
  getListSubCateV2(cateId: string): Observable<any> {
    let params = new HttpParams().set('category', cateId).set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.shopHouseSubCategpryV2, { params }).pipe(map((results) => results));
  }
  // List shops by sub category
  getListShopV2(subcategory: string): Observable<any> {
    let params = new HttpParams().set('category', subcategory).set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.shopHouseV2, { params }).pipe(map((results) => results));
  }
  // shophouse info detail
  getShopDetailV2(shophouseId: string): Observable<any> {
    return this.http.get(`${EnvService.shopHouseV2}/${shophouseId}`).pipe(map((results) => results));
  }
  // get shophouse of user
  getShopOfUserV2(): Observable<any> {
    return this.http.get(`${EnvService.shopHouseV2}/check-shop-owner`).pipe(map((results) => results));
  }
  // get top shophouse of user
  getTopShopOfUserV2(): Observable<any> {
    return this.http.get(`${EnvService.shopHouseV2}/top/data`).pipe(map((results) => results));
  }
  // Register shop
  registerShopV2(params: any): Observable<any> {
    return this.http.post(EnvService.shopHouseV2, params).pipe(map((results) => results));
  }
  // get tag of shop
  getTagsOfShopV2(): Observable<any> {
    return this.http.get(EnvService.tagShopV2).pipe(map((results) => results));
  }
  // search shop by tags , cate
  searchShopByTagsAndCateV2(page: any, limit: any, tags: Array<number>, categories: Array<string>, orderMode?: number): Observable<any> {
    let params = {
      tags: tags,
      categories: categories,
      page: page,
      limit: limit,
      orderMode
    };
    return this.http.post(EnvService.searchShop, params).pipe(map((results) => results));
  }
  // List product of shop
  getProductShopV2(shopId: string): Observable<any> {
    let params = new HttpParams().set('shopHouse', shopId).set('_v', new Date().getTime().toString());
    return this.http.get(EnvService.productShopV2, { params }).pipe(map((results) => results));
  }
  // Product of detail
  getProducDetailV2(productId: string): Observable<any> {
    return this.http.get(`${EnvService.productShopV2}/${productId}`).pipe(map((results) => results));
  }
  // count userview of shop
  getCountViewOfShopV2(shopId: string): Observable<any> {
    return this.http.get(`${EnvService.productShopV2}/user-view/${shopId}`).pipe(map((results) => results));
  }
  // get comment shop
  getcommentShopV2(shopId: string): Observable<any> {
    return this.http.get(`${EnvService.commentShopV2}/${shopId}`).pipe(map((results) => results));
  }
  // post comment shop
  postCommentShopV2(params: any): Observable<any> {
    return this.http.post(EnvService.commentShopV2, params).pipe(map((results) => results));
  }
  // post comment shop
  replyCommentShopV2(commentId: string, params: any): Observable<any> {
    return this.http.post(`${EnvService.replycommentShopV2}/${commentId}`, params).pipe(map((results) => results));
  }

  // get evaluations of Shop
  getEvaluationShopV2(shopId: string, page = 1, limit = 10): Observable<any> {
    let params = new HttpParams().set('page', page.toString()).set('limit', limit.toString()).set('_v', new Date().getTime().toString());

    return this.http.get(`${EnvService.getEvaluationShopV2}/${shopId}`, { params }).pipe(map((results) => results));
  }
  // order
  requestionOrderProductV2(params): Observable<any> {
    return this.http.post(EnvService.orderShopV2, params).pipe(map((results) => results));
  }
  // get order history
  getListOrderHistorysV2(page: number, limit: number, category: string, search: string, status = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('category', category)
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    if (status) {
      params = params.set('filter[status]', status);
    }
    return this.http
      .get(EnvService.orderShopV2, {
        params,
      })
      .pipe(map((results) => results));
  }
  // get shop of user
  getDataUserShopV2(page: number, limit: number, search: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('search', search)
      .set('_v', new Date().getTime().toString());
    return this.http
      .get(EnvService.userShopTopData, {
        params,
      })
      .pipe(map((results) => results));
  }

  // get comment shop
  getcommentOrderV2(orderId: string): Observable<any> {
    const params = new HttpParams().set('orderHistoryId', orderId);
    return this.http.get(`${EnvService.commentOrderV2}`, { params }).pipe(map((results) => results));
  }
  // post comment shop
  postCommentOrderV2(params: any): Observable<any> {
    return this.http.post(EnvService.commentOrderV2, params).pipe(map((results) => results));
  }
  // post comment shop
  replyCommentOrderV2(params: any): Observable<any> {
    return this.http.post(`${EnvService.replycommentOrderV2}`, params).pipe(map((results) => results));
  }
  // rating
  putOrderProductRateStarUser(orderHistoryId: any, stars: any, userComment: any): Observable<any> {
    const params = {
      orderHistoryId,
      stars,
      userComment,
    };
    return this.http.put(EnvService.putOrderHistoryRateStarUser, params).pipe(map((results) => results));
  }
  putOrderProductRateStarShop(orderHistoryId: any, stars: any, userComment: any): Observable<any> {
    const params = {
      orderHistoryId,
      stars,
      userComment,
    };
    return this.http.put(EnvService.putOrderHistoryRateStarShop, params).pipe(map((results) => results));
  }
  // cancel order
  putOrderProductCancelUser(orderHistoryId: any): Observable<any> {
    const params = {
      orderHistoryId,
    };
    return this.http.put(EnvService.putOrderHistoryCancelUser, params).pipe(map((results) => results));
  }
  putOrderProductCancelProvider(orderHistoryId: any): Observable<any> {
    const params = {
      orderHistoryId,
    };
    return this.http.put(EnvService.putOrderHistoryCancelProvider, params).pipe(map((results) => results));
  }
  // change time delivery
  changeTimeDeliveryOrder(orderHistoryId: string, timeDeliver: string): Observable<any> {
    const params = {
      timeDeliver,
    };
    return this.http.put(`${EnvService.changeTimeDeliveryOrder}/${orderHistoryId}`, params).pipe(map((results) => results));
  }
  // get promotion code banner
  promotionCodeBanner(): Observable<any> {
    return this.http.get(EnvService.promotionCodeBanner).pipe(map((results) => results));
  }
  // get survey
  postSurvey(surveyId: string, surveyResult: any): Observable<any> {
    const params = {
      surveyResult: JSON.stringify(surveyResult),
    };
    return this.http.post(`${EnvService.postSurvey}/${surveyId}`, params).pipe(map((results) => results));
  }
}
