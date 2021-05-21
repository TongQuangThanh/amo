import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { PaymentService } from 'src/app/utils/payment.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-popup-iframe-payment',
  templateUrl: './popup-iframe-payment.page.html',
  styleUrls: ['./popup-iframe-payment.page.scss'],
})
export class PopupIframePaymentPage extends PaymentService implements OnInit {
  paymentData: any;
  urlPayment: any;
  constructor(
    private navCtrl: NavController,
    public apiService: ApiService,
    private loading: LoadingService,
    private modalController: ModalController,
    private navParams: NavParams,
    public sanitizer: DomSanitizer
  ) {
    super(apiService, sanitizer);
  }

  ngOnInit() {
    this.paymentData = this.navParams.data;
    this.urlPayment = this.transform( this.navParams.data.urlPayment);
    console.log( this.paymentData);
    
  }
  // ionViewWillEnter() {
  //   const frame:any = document.getElementById('paymentIframe');
  //   frame.contentWindow.postMessage('{}', this.paymentData.urlPayment);  
  // }

  getPaymentResult(data: any): void {
    const dataParse = JSON.parse(data)
    this.isShowPaymentEpay = false;
    console.log(dataParse);
    
    // if(dataParse && dataParse.result){
    //   if(dataParse.result == 1){
    //     this.navCtrl.navigateForward('/payment-success');
    //   }else{
    //     this.navCtrl.navigateForward('/payment-fail');
    //   }
    // }
  }

  async closeModal() {
    const onClosedData = JSON.stringify({
      result: "1",
      message: "cancel",
      token:""
    });
    await this.modalController.dismiss(onClosedData);
  }

}
