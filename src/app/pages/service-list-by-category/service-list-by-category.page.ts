import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingController } from '@ionic/angular';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-list-by-category',
  templateUrl: './service-list-by-category.page.html',
  styleUrls: ['./service-list-by-category.page.scss'],
})
export class ServiceListByCategoryPage implements OnInit {
  listServicesByGroup: any;
  loaderToShow: any;
  categoryID: string;
  titlePage: string;

  constructor(
    public loadingController: LoadingController,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private nativePageTransitions: NativePageTransitions) { }
  ngOnInit() {
    this.titlePage = "";
    this.categoryID = this.route.snapshot.paramMap.get('id');
    this.listServicesByGroup  = [];
    this.getServicesByCategory(this.categoryID, null);
  }

  getServicesByCategory(category: string, event: any) {
    this.showLoader();
    const self = this;
    this.apiService.getListServiceCategory(category).subscribe(resultServiceCategory => {
      if(resultServiceCategory.serviceCategories.length > 0){
        self.titlePage = resultServiceCategory.serviceCategories[0].title;
        self.apiService.getListServiceByGroup(resultServiceCategory.serviceCategories[0]._id)
          .subscribe(result => {
            self.listServicesByGroup = result.services;
            if (event) {
              event.target.complete();
            }
            self.loadingController.dismiss();
        });
      }else{
        self.loadingController.dismiss();
      }
    });
  }

  detailPage(event) {
    this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/service-detail/' + event.currentTarget.id);
  }

  orderService(event) {
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    console.log("orderService")
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Loading content'
    }).then((res) => {
      res.present();
    });
  }
}
