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

  apartmentUser: '',
};

