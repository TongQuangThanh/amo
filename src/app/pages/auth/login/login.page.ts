import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  phone: string;
  password: string;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.phone = params.phoneNumber;
  });
  }

  checkIsEnabled() {
    console.log(this.phone);
    console.log(this.password);
    if (this.phone && this.phone.length >= 8 && this.password && this.password.length >= 8) {
      return true;
    }
    return false;
  }

  login() {
    this.authService.login(this.phone, this.password).subscribe(
      data => {
        console.log('Logged In');
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/dashboard/home');
      }
    );
  }
}
