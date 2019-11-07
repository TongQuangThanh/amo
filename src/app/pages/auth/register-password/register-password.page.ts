import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../../services/loading/loading.service';
import { UtilsService } from '../../../utils/utils.service';
import { AlertService } from '../../../services/alert/alert.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApartmentCodeRegisterPage } from '../apartment-code-register/apartment-code-register.page'

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.page.html',
  styleUrls: ['./register-password.page.scss'],
})
export class RegisterPasswordPage implements OnInit {

  newPassword: string;
  confirmPassword: string;
  phoneNumber: string;
  tokenCode: string;
  errorMessage:string = "";
  errorNewPass:Boolean = false;
  errorConfirmPass:Boolean = false;

  constructor(
    private alertService: AlertService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public modalController: ModalController,
  ) { 
    this.phoneNumber = this.route.snapshot.paramMap.get('phone');
    this.tokenCode = this.route.snapshot.paramMap.get('token');
  }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ApartmentCodeRegisterPage,
      componentProps: {
        "phoneNumber": this.phoneNumber,
        "token": this.tokenCode,
        "password": this.newPassword
      },
      cssClass: "custom-modal-wrapper"
    });

    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned !== null) {
        const dataReturnedResult = JSON.parse(dataReturned.data);
        if(dataReturnedResult.result == '0'){
          this.navCtrl.navigateRoot('/login/' + this.phoneNumber);
        }else{

        }
      }
    });

    return await modal.present();
  }

  changePass(){
    if(!this.newPassword || this.newPassword.length < 8){
      this.errorNewPass = true;
      this.errorConfirmPass = false;
      this.errorMessage = "Please new password at least 8 character";
      return;
    }

    if(!this.confirmPassword || this.confirmPassword.length < 8){
      this.errorNewPass = false;
      this.errorConfirmPass = true;
      this.errorMessage = "Please confirm password at least 8 character";
      return;
    }

    if(this.newPassword != this.confirmPassword){
      this.errorNewPass = true;
      this.errorConfirmPass = true;
      this.errorMessage = "New password and confirm password does not match";
      return;
    }

    this.presentModal();
  }

}
