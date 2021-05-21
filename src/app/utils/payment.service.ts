import { Component, Injectable, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../services/api/api.service';

const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
const eventer = window[eventMethod];
const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

@Injectable()
export abstract class PaymentService {
  isShowPaymentEpay = false;
  urlPayment: any;

  // abstract iframePayment: any;
  
  constructor(public apiService: ApiService, public sanitizer: DomSanitizer) {
    this.createEvent();
  }

  createEvent() {
    eventer(messageEvent, (e) => {
      // if (e.origin !== 'http://the-trusted-iframe-origin.com') return;
      if (e.origin !== 'http://42.113.207.131:8586') {
        return;
      }
      this.getPaymentResult(e.data);
    });
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  abstract getPaymentResult(data: any): void;
}
