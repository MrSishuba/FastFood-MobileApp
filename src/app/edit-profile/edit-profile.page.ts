import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  profile: any = {
    name: 'Jake Richards',
    phoneNumber: '021 342 4361',
    email: 'jake.Richards@HorzionSummit.co.za'
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  navigateBack() {
    this.navCtrl.back();
  }

  updateProfile() {
      //  logic to save the updated profile details to local storage
      localStorage.setItem('profile', JSON.stringify(this.profile));
      console.log('Updated profile:', this.profile);
      // After updating, navigate back to the previous page
      this.navCtrl.back();
  }

}

