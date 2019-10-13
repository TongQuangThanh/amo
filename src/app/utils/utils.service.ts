
import * as moment from 'moment';

export const UtilsService = {
  formatString(stringDate: string) {
    return moment(stringDate).format('DD-MM-YYYY');
  },
};

