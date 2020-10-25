import { environment} from '../../environments/environment';

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
  feedbacksDetail: environment.base + '/feedback/',
  feedbacksCategory: environment.base + '/feedback-category/',
  userStatistic: environment.base + '/user-statistic/',

  feedback_reply: environment.base + '/feedback-reply/',
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
  putOrderHistoryRateStarUser: environment.base + '/order-history/rate-star-user',
  putOrderHistoryRateStarShop: environment.base + '/order-history/rate-star-shop',
  putOrderHistoryCancelUser: environment.base + '/order-history/cancel-user',
  putOrderHistoryCancelProvider: environment.base + '/order-history/cancel-provider',
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
  
};

