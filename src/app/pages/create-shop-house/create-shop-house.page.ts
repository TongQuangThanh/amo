import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { PopupOpenMarketPage } from '../popup-open-market/popup-open-market.page';

@Component({
  selector: 'app-create-shop-house',
  templateUrl: './create-shop-house.page.html',
  styleUrls: ['./create-shop-house.page.scss'],
})
export class CreateShopHousePage implements OnInit {
  formGroupCate = '';
  formGroupCateClass = '';
  form_type = '';
  form_type_class = '';
  form_name = '';
  form_name_class = '';
  form_note = '';
  listType = [];
  listServiceCategory = [];
  disable_button_send = 'button-disable';
  listApartment = [];
  apartmentId = '';
  apartmentIdClass = '';

  constructor(private loading: LoadingService, private apiService: ApiService, private modalController: ModalController) {}
  ngOnInit() {}
  ionViewWillEnter() {
    this.formGroupCate = '';
    this.formGroupCateClass = '';
    this.form_type = '';
    this.form_type_class = '';
    this.form_name = '';
    this.form_name_class = '';
    this.form_note = '';
    this.listType = [];
    this.listServiceCategory = [];
    this.listApartment = [];
    this.apartmentId = '';
    this.apartmentIdClass = '';
    this.disable_button_send = 'button-disable';
    this.getListApartment();
    this.getAllServiceSystem();
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
    if (this.form_name != '') {
      this.form_name_class = 'has-input-value';
    } else {
      this.form_name_class = '';
    }
    this.checkStatusButtonSend();
  }
  eventButtonSend() {
    this.loading.present();
    const apartment = this.listApartment.find((item) => item.apartmentId == this.apartmentId);
    let params = {
      campaign: apartment.campaignId,
      apartment: apartment.apartmentId,
      category: this.form_type,
      title: this.form_name,
      content: this.form_note,
    };
    this.apiService.registerShopV2(params).subscribe(
      (result) => {
        this.martketResuldModal();
        this.loading.dismiss();
      },
      (error) => {
        this.loading.dismiss();
      }
    );
  }
  checkStatusButtonSend() {
    if (this.form_type != '' && this.form_name != '' && this.apartmentId) {
      this.disable_button_send = '';
    } else {
      this.disable_button_send = 'button-disable';
    }
  }

  async martketResuldModal() {
    const modal = await this.modalController.create({
      component: PopupOpenMarketPage,
    });
    return await modal.present();
  }
}
