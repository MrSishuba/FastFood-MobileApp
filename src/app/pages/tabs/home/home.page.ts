import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  swiperModules = [IonicSlides];
  cartItems: any[] = []; // Defined cartItems as an array

  constructor(private navCtrl: NavController) {
    if (!localStorage.getItem('restaurants')) {
      const restaurants = [
        {
          name: "Essence",
          cuisine: "Indonesian Cuisine",
          rating: 4.9,
          time: "20 mins",
          price: 150,
          distance: "3.5 kms away",
          image: "https://img.jakpost.net/c/2020/09/13/2020_09_13_104172_1599983230._large.jpg",
          address: "Ember White Avenue, Pretoria East",
          dishname:"Rendang Olive-flower Linguine"
        },
        {
          name: "Le Petit Paris",
          cuisine: "French Cuisine",
          rating: 4.7,
          time: "30 mins",
          price: 200,
          distance: "2.2 kms away",
          image: "https://www.foodandwine.com/thmb/11IocKmBT_guH3UiwsSlecon0sY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/200610-r-xl-red-snapper-with-citrus-and-fennel-salad-b38cb7be5eb34f58b69585ba4b51b146.jpg",
          address: "57th Avenue, Sunninghil",
          dishname:"Le Printemps Poulet Fleur"
        },
        {
          name: "Seaward Sensation",
          cuisine: "Japanese Cuisine",
          rating: 4.6,
          time: "25 mins",
          price: 180,
          distance: "1.8 km away",
          image: "https://www.foodandwine.com/thmb/ClPnka2WSnl5PtrMYOjlmXsXw1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/escovitch-fish-FT-RECIPE0920-8a733638c2ba4b72b48737782fa616c2.jpg",
          address: "Evening Noon Street,Silverlakes",
          dishname:"Squid & Rainbow Garnished Angel Fish"
        },
        {
          name: "Don Falcone Eatry",
          cuisine: "Italian Cuisine",
          rating: 4.8,
          time: "10 mins",
          price: 120,
          distance: "1.2 km away",
          image: "https://urbanblisslife.com/wp-content/uploads/2016/10/Rigatoni-with-Italian-Sausage-2022-FEATURE.jpg",
          address: "Onynx Avenue, Lynwood",
          dishname:"Lasagna alla Bolognese Artigianale"
        }
      ];
      localStorage.setItem('restaurants', JSON.stringify(restaurants));
    }
  }

  ngOnInit() {
    const storedItems = localStorage.getItem('restaurants');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
  }

  handleItemClick(item: any) {
    console.log('Clicked item:', item);
    // Create order object with item details
    const order = {
      name: item.name,
      image: item.image,
      address: item.address,
      dishname: item.dishname,
      price:item.price
      
    };

    // Save the order object to local storage
    localStorage.setItem('order', JSON.stringify(order));

    // Redirect to the cart page
    this.navCtrl.navigateForward('/cart');
  }
}
