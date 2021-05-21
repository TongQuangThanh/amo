import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-notification-poll',
  templateUrl: './notification-poll.page.html',
  styleUrls: ['./notification-poll.page.scss'],
})
export class NotificationPollPage implements OnInit {
  selectedLanguage:string;
  public PtagClicked: boolean = false;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    public navCtrl: NavController, 
    private render: Renderer2
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  public onShow(controlToShow) {
    this.render.setStyle(controlToShow, 'visibility', 'visible');
  }
  public onHide(controlToHide) {
    this.render.setStyle(controlToHide, 'visibility', 'hidden');
  }
}
