
import * as moment from 'moment';

export const UtilsService = {
  formatString(stringDate: string) {
    return moment(stringDate).format('DD/MM/YYYY');
  },
  formatStringFull(stringDate: string) {
    return moment(stringDate).format('DD/MM/YYYY hh:mm:ss');
  },
  checkPhoneNumber(phoneNumber:string): boolean {
    if(phoneNumber && phoneNumber.length >= 10 && phoneNumber.length <= 11 && phoneNumber[0] == '0'){
      return true;
    }else{
      return false
    }
  },
  requestDetailComponentShare:null,
  isAppOpen:false,
  notificationNavigatorLink: ""
};

