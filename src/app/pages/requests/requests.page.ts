import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  listRequestAll: any;
  currentPage: number;
  numberRecordOnPage: number;
  constructor(
    private apiService: ApiService,
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) {
  }

  ngOnInit() {
    this.listRequestAll  = [];
    this.currentPage = 1;
    this.numberRecordOnPage = 10;
    this.getRequestAll(this.currentPage, this.numberRecordOnPage, '', '', null);
  }

  getRequestAll(page: number, limit: number, category: string, search: string, event: any) {
    this.apiService.getListRequest(page, limit, category, search)
      .subscribe(result => {
        this.listRequestAll = this.listRequestAll.concat(result.feedbacks);
        if (event) {
          event.target.complete();
        }
    });
  }

  loadData(event) {
    this.currentPage++;
    this.getRequestAll(this.currentPage, this.numberRecordOnPage, '', '', event);
  }

  detailPage(event) {
    console.log(event);
  }

  formatString(stringDate: string) {
    return moment(stringDate).format('DD-MM-YYYY');
  }
}
