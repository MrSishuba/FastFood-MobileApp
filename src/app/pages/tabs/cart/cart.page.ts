import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: any[] = [];
  deliveryInstructions: string = ""; // To store delivery instructions
  deliveryFee: number = 20; // Fixed delivery fee

  constructor(private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
    console.log('Cart Items',this.cartItems);
    this.getCartItems();
  }

  getCartItems() {
    const storedOrder = localStorage.getItem('order');
    if (storedOrder) {
      this.cartItems.push(JSON.parse(storedOrder)); // Push the order into cartItems array
    }
  }
  

  calculateItemTotal(): number {
    // Logic to calculate item total goes here
    // For example, summing up prices of all items
    return this.cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
  }

  calculateTotalToPay(): number {
    // Logic to calculate total to pay (item total + delivery fee) goes here
    return this.calculateItemTotal() + this.deliveryFee;
  }

  showSuccessMessage = false;

  async makePayment() {
    // Personal test to check console if this works
    console.log('Payment successful');

    // Store order details in local storage
    localStorage.setItem('pastOrders', JSON.stringify(this.cartItems));

    // Redirect to the accounts page
    this.navCtrl.navigateForward('/account');

    // Populate restaurant details on accounts page
    localStorage.setItem('restaurant', JSON.stringify(this.cartItems[0].restaurant));

    // Display toast message for payment success
    const toast = await this.toastController.create({
      message: 'Payment Successful',
      duration: 5000, // Toast will be displayed for 5 seconds
      position: 'bottom',
      color: 'success' 
    });
    toast.present();
  }
}


