import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { HelpModalPage } from 'src/app/help-modal/help-modal.page';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  profile: any = {
    name: 'Jake Richards',
    phoneNumber: '021 342 4361',
    email: 'jake.Richards@HorzionSummit.co.za'
  };

  pastOrders: any[] = [];
  paymentSuccess: boolean = false;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      this.profile = JSON.parse(storedProfile);
    }
    
    const storedOrders = localStorage.getItem('pastOrders');
    if (storedOrders) {
      this.pastOrders = JSON.parse(storedOrders);
    }
  }

  goToEditPage() {
    this.navCtrl.navigateForward(['/edit-profile']);
  }

  dismissSuccessMessage() {
    this.paymentSuccess = false;
  }

  reorder(order: any) {
    localStorage.setItem('order', JSON.stringify(order));
    this.navCtrl.navigateForward('/cart');
  }

  async getHelp() {
    const modal = await this.modalController.create({
      component: HelpModalPage,
      componentProps: {}
    });
    return await modal.present();
  }

}



