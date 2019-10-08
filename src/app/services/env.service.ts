import { environment} from '../../environments/environment';

export const EnvService = {
  register: environment.base + '/auth/register',
  login: environment.base + '/auth/login',
  logout: environment.base + '/auth/logout',
  forgotPassword: environment.base + '/auth/forgotPassword',
  confirm: environment.base + '/auth/confirm',
  resetPassword: environment.base + '/auth/reset',
  changePassword: environment.base + '/account/change-password',
  updateProfile: environment.base + '/account/profile',
  resendActiveCode: environment.base + '/account/resendActive',
  updateAvatar: environment.base + '/account/update-avatar',
  addApartment: environment.base + '/account/apartments',
  notification: environment.base + '/account/notification',
  articleCategory: environment.base + '/article-category',
  articles: environment.base + '/article?',
  articlesDetail: environment.base + '/article/',

  apartment: environment.base + '/account/apartments',
  apartmentUser: environment.base + '/apartment/user',
  feedback_addnew: environment.base + '/feedback',
  language: environment.base + '/category/language',
  paymentBank: environment.base + '/payment-bank',
  paymentLog: environment.base + '/payment-log',
  payments: environment.base + '/payment-bill?',
  paymentCommentPost: environment.base + '/payment-comment',
  paymentCategory: environment.base + '/payment-category',
  serviceGroup: environment.base + '/service-group',
  serviceLog: environment.base + '/service-log',
  // getVersion: Platform.OS === 'ios' ? '/public/app-version/ios' : '/public/app-version/android',
  feedback_addFile: environment.base + '/media',
  getBanner: environment.base + '/banner',
  getPost: environment.base + '/post',

  feedbacks: environment.base + '/feedback?'
};

