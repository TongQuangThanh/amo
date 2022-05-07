import { environment } from '../../environments/environment';

export const EnvService = {
  register: environment.base + '/auth/register',
  login: environment.base + '/auth/login',
  logout: environment.base + '/auth/logout',
  forgotPassword: environment.base + '/auth/forgotPassword',
  confirm: environment.base + '/auth/confirm',
  confirmTokenCode: environment.base + '/auth/confirmTokenCode',
  confirmSMSCode: environment.base + '/auth/confirmSmsCode',
  resetPassword: environment.base + '/auth/reset',
  changePassword: environment.base + '/account/change-password',
  updateProfile: environment.base + '/account/profile',
  resendActiveCode: environment.base + '/account/resendActive',
  updateAvatar: environment.base + '/account/update-avatar',

  notification: environment.base + '/account/notification',
  articleCategory: environment.base + '/article-category',
  articles: environment.base + '/article?',
  articlesComment: environment.base + '/article-comment?',
  addArticlesComment: environment.base + '/article-comment/',
  articlesDetail: environment.base + '/article/',

  apartment: environment.base + '/account/apartments',
  apartmentDetail: environment.base + '/account/apartments/',
  apartmentUser: environment.base + '/apartment/user',
  feedback_addnew: environment.base + '/feedback',
  feedbacknew_addnew: environment.base + '/feedbacknew',
  language: environment.base + '/category/language',
  paymentBank: environment.base + '/payment-bank',
  paymentLog: environment.base + '/payment-log',
  payments: environment.base + '/payment-bill?',
  paymentDetail: environment.base + '/payment-bill/',
  paymentComment: environment.base + '/payment-comment',
  paymentCategory: environment.base + '/payment-category',

  serviceGroup: environment.base + '/service-group',
  serviceCategory: environment.base + '/service-category',
  serviceLog: environment.base + '/service-log',
  services: environment.base + '/service?',
  serviceDetail: environment.base + '/service/',

  // getVersion: Platform.OS === 'ios' ? '/public/app-version/ios' : '/public/app-version/android',
  feedback_addFile: environment.base + '/media',
  getBanner: environment.base + '/banner',
  getPost: environment.base + '/post',
  postDetail: environment.base + '/post/',

  feedbacks: environment.base + '/feedback?',
  feedbacksnew: environment.base + '/feedbacknew?',
  feedbacksDetail: environment.base + '/feedback/',
  feedbacksNewDetail: environment.base + '/feedbacknew/',
  feedbacksCategory: environment.base + '/feedback-category/',
  userStatistic: environment.base + '/user-statistic/',

  feedback_reply: environment.base + '/feedback-reply/',
  feedbacknew_reply: environment.base + '/feedbacknew-reply/',
  popupConfig: environment.base + '/popup-config',
  countNotificationConfig: environment.base + '/notification-common/count-user-click/',
  countPostClick: environment.base + '/post/user-click/',
  countPopupConfigClick: environment.base + '/popup-config/user-click/',
  media_addFile: environment.base + '/media',

  // vund5
  servicePromotionCode: environment.base + '/promotion-code',
  serviceShopProduct: environment.base + '/shop-product?',
  serviceServiceGroup: environment.base + '/service-group',
  getUserShop: environment.base + '/user-shop',
  getUserShopCheckShopOwner: environment.base + '/user-shop/check-shop-owner',
  getUserShopByCategory: environment.base + '/user-shop?',
  getUserShopTopData: environment.base + '/user-shop/top/data',
  getShopProductCategory: environment.base + '/user-shop-category',
  postRequestShopProduct: environment.base + '/request-shop-product',
  getOrderHistory: environment.base + '/order-history',
  getOrderHistoryById: environment.base + '/order-history/id',
  putOrderHistoryRateStarUser: environment.base + '/order-history-v2/rate-star-user',
  putOrderHistoryRateStarShop: environment.base + '/order-history-v2/rate-star-shop',
  putOrderHistoryCancelUser: environment.base + '/order-history-v2/cancel-user',
  putOrderHistoryCancelProvider: environment.base + '/order-history-v2/cancel-provider',
  getServiceLog: environment.base + '/service-log',
  getServiceLogById: environment.base + '/service-log/id',
  orderHistoryComment: environment.base + '/order-history-comment',
  getOrderHistoryByProvider: environment.base + '/order-history/find-by-provider',
  putOrderHistoryProviderFinish: environment.base + '/order-history/provide-finish',
  putOrderHistoryProviderConfirm: environment.base + '/order-history/provide-confirm',
  putOrderHistoryUserConfirm: environment.base + '/order-history/user-confirm',
  putOrderHistoryUserComplain: environment.base + '/order-history/user-complain',

  // fixbug
  apartmentMember: environment.base + '/apartment/member',
  apartmentVehicle: environment.base + '/apartment/vehicle',
  userComment: environment.base + '/user-comment',

  // API ví điện tử
  registerEpay: environment.base + '/epay-service/register-epay',
  getEpayUser: environment.base + '/epay-service/get-epay-user',
  epayRechargeUrl: environment.base + '/epay-service/epay-recharge-url',
  epaypayment: environment.base + '/epay-service/epay-payment',
  epayPageApproved: environment.base + '/epay-service/epay-page-approved',
  momoPayment : environment.base + '/momo-payment/payment',

  // post like { "statusLike": "like" } status: 'like' | 'unlike' | 'none'
  postLike: environment.base + '/post-like/',
  addPostComment: environment.base + '/post-comment/',
  addPostCommentReply: environment.base + '/post-reply/',

  // article like { "statusLike": "like" } status: 'like' | 'unlike' | 'none'
  articleLike: environment.base + '/article-like/',
  sendArticleReply: environment.base + '/article-reply/',

  // ========================== Service shop V2 API's ===================================== //
  // Shop house category list
  shopHouseCategoryV2: environment.base + '/shop-house-category-v2',
  // Shop house sub categories list
  shopHouseSubCategpryV2: environment.base + '/shop-house-sub-category-v2', // + :id
  // List shops by sub category
  shopHouseV2: environment.base + '/shop-house-v2',
  requestHouseSaleV2: environment.base + '/request-house-sale',
  // List product of shop
  productShopV2: environment.base + '/shop-product-v2',
  // List tag of shop
  tagShopV2: environment.base + '/shop-house-tag-v2',
  // search shop by tags , cate
  searchShop: environment.base + '/shop-house-v2/search',
  // get, set comment shop
  commentShopV2: environment.base + '/shop-product-comment-v2',
  // reply comment shop
  replycommentShopV2: environment.base + '/shop-product-reply-v2',

  //  order shop v2
  orderShopV2: environment.base + '/order-history-v2',
  // get evaluations of Shop
  getEvaluationShopV2: environment.base + '/order-history-v2/order-history-evaluation',
  //get shop of user
  userShopTopData: environment.base + '/shop-house-v2/top/data',

  // get, set comment order
  commentOrderV2: environment.base + '/order-history-comment-v2',
  // reply comment shop
  replycommentOrderV2: environment.base + '/order-history-reply-v2',
  // change time delivery
  changeTimeDeliveryOrder: environment.base + '/order-history-v2/change-time-delivery',
  // promotion code banner
  promotionCodeBanner: environment.base + '/promotion-code-v2/banner',
  // post survey
  postSurvey: environment.base + '/article/survey',
};
