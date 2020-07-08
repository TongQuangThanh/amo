import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { Platform, NavController } from '@ionic/angular';
import { AlertService } from '../../services/alert/alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-comment',
  templateUrl: './payment-comment.page.html',
  styleUrls: ['./payment-comment.page.scss'],
})
export class PaymentCommentPage implements OnInit{

  listPaymentComment: any;
  paymentBillID:string;
  heightScreen:number;
  editorMsg:any;
  @ViewChild("chat_input", {static: false}) inputField: ElementRef;
  constructor(
    private alertService: AlertService,
    private apiService: ApiService,
    private loading: LoadingService,
    private route: ActivatedRoute,
    private platform: Platform,
  ) {
    this.listPaymentComment = [];
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 70- 60;
    });
    this.paymentBillID = this.route.snapshot.paramMap.get('id');
    
  }

  ngOnInit(): void {
    this.getPaymentComment();
  }

  getPaymentComment() {
    this.loading.present();
    const self = this;
    this.apiService.getListPaymentComment(this.paymentBillID)
      .subscribe(result => {
        self.listPaymentComment = result.paymentComments;
        self.loading.dismiss();
        self.inputField.nativeElement.focus();
    },
    error => {
      self.loading.dismiss();
    });
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  convertText(textInput:string){
    return textInput.replace(/\n/ig, '<br/>');;
  }

  sendMsg(){
    this.loading.present();
    const self = this;
    const params = {
      content: this.editorMsg,
      bill: this.paymentBillID
    }
    this.apiService.sendPaymentComment(params)
      .subscribe(result => {
        self.loading.dismiss();
        self.editorMsg = "";
        self.getPaymentComment();
    },
    error => {
      self.editorMsg = "";
      self.loading.dismiss();
    });
  }
}
