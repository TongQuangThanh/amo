import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { PopupRequestHouseSaleSuccessPage } from '../popup-request-house-sale-success/popup-request-house-sale-success.page';

@Component({
  selector: 'app-request-house-sale',
  templateUrl: './request-house-sale.page.html',
  styleUrls: ['./request-house-sale.page.scss'],
})
export class RequestHouseSalePage implements OnInit {
  formGroupCate = '';
  formGroupCateClass = '';
  form_type = '';
  form_type_class = '';
  form_price = '';
  form_price_class = '';
  form_note = '';
  listType = [];
  listServiceCategory = [];
  disable_button_send = 'button-disable';
  listApartment = [];
  apartmentId = '';
  apartmentIdClass = '';

  decimal: string = ',';
  thousand: string = '.';

  constructor(private loading: LoadingService, private apiService: ApiService, private modalController: ModalController) {}
  ngOnInit() {}
  ionViewWillEnter() {
    this.formGroupCate = '';
    this.formGroupCateClass = '';
    this.form_type = '';
    this.form_type_class = '';
    this.form_price = '';
    this.form_price_class = '';
    this.form_note = '';
    this.listType = [];
    this.listApartment = [];
    this.apartmentId = '';
    this.apartmentIdClass = '';
    this.disable_button_send = 'button-disable';
    this.getListApartment();
    // this.getDataShopProductCategory();
  }

  getListApartment() {
    this.apiService.getListUserApartment().subscribe(
      (result) => {
        this.listApartment = result.userApartments.map((data, index) => {
          const apartment = data.apartment;
          if(index == 0) {
            this.apartmentId = apartment._id;
          }
          return {
            apartmentId: apartment._id,
            apartmentTitle: apartment.title + ' - ' + apartment.campaign.title,
            campaignId: apartment.campaign._id,
          };
        });
      },
      (error) => {}
    );
  }

  getAllServiceSystem() {
    this.loading.present();
    this.apiService.getListShopHouseCateV2().subscribe(
      (result) => {
        this.loading.dismiss();
        if (result && result.shopCategories) {
          this.listServiceCategory = result.shopCategories || [];
        }
      },
      (error) => {
        this.loading.dismiss();
      }
    );
  }

  getDataShopProductCategory() {
    const self = this;
    this.loading.present();
    this.apiService.getListSubCateV2(this.formGroupCate).subscribe(
      (result) => {
        this.listType = result?.shopHouseSubCategoriesV2 || [];
        setTimeout(() => {
          this.loading.dismiss();
        }, 300);
      },
      (error) => {
        this.loading.dismiss();
      }
    );
  }
  ionChangePulldown1(event) {
    if (this.form_type != '') {
      this.form_type_class = 'has-input-value';
    } else {
      this.form_type_class = '';
    }
    this.checkStatusButtonSend();
  }

  ionChangeGroupCate(event) {
    if (this.formGroupCate != '') {
      this.formGroupCateClass = 'has-input-value';
    } else {
      this.formGroupCateClass = '';
    }
    this.form_type = '';
    this.checkStatusButtonSend();
    this.getDataShopProductCategory();
  }

  ionChangeApartment(event) {
    if (this.apartmentId != '') {
      this.apartmentIdClass = 'has-input-value';
    } else {
      this.apartmentIdClass = '';
    }
    this.checkStatusButtonSend();
  }

  ionChangeTextBox1() {
    if (this.form_price != '') {
      this.form_price_class = 'has-input-value';
    } else {
      this.form_price_class = '';
    }
    this.checkStatusButtonSend();
  }
  eventButtonSend() {
    var selt = this;
    this.loading.present();
    const apartment = this.listApartment.find((item) => item.apartmentId == this.apartmentId);
    let params = {
      campaign: apartment.campaignId,
      apartment: apartment.apartmentId,
      category: this.form_type,
      price: parseInt(this.form_price.split(this.thousand).join('')),
      note: this.form_note,
    };
    this.apiService.requestHouseSaleV2(params).subscribe(
      (result) => {
        this.requestHouseSaledModal();
        
        this.loading.dismiss();
      },
      (error) => {
        this.loading.dismiss();
      }
    );
  }
  checkStatusButtonSend() {
    if (this.form_type != '' && this.form_price != '' && this.apartmentId) {
      this.disable_button_send = '';
    } else {
      this.disable_button_send = 'button-disable';
    }
  }

  async requestHouseSaledModal() {
    const modal = await this.modalController.create({
      component: PopupRequestHouseSaleSuccessPage,
    });
    return await modal.present();
  }

  /**
   * Listener changeValue
   * @param event
   */
   changeValue(event: any) {
    let value = event.target.value;
    if (value == '') {
      return;
    }
    value = value + '';
    value = parseInt(value.replace(/[\D]+/g, ''));
    value = value + '';
    //value = value.replace(/([0-9]{0})$/g, this.decimal + '$1');
    var parts = value.toString().split(this.decimal);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousand);
    value = parts.join(this.decimal);
    console.log(value);
    event.target.value = value;
    this.form_price = value;
    return true;
  }
}
