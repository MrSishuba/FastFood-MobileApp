import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  isLoading: boolean = false;
  query: string = '';
  allRestaurants: any[] = [];
  restaurants: any[] = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Define your restaurants data here, similar to what you have in home.page.ts
    this.allRestaurants = [
      {
        name: "Essence",
        cuisine: "Indonesian Cuisine",
        rating: 4.9,
        time: "20 mins",
        price: 150,
        distance: "3.5 kms away",
        image: "https://img.jakpost.net/c/2020/09/13/2020_09_13_104172_1599983230._large.jpg",
        address: "Ember White Avenue, Pretoria East",
        dishname: "Rendang Olive-flower Linguine"
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
        dishname: "Le Printemps Poulet Fleur"
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
        dishname: "Squid & Rainbow Garnished Angel Fish"
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
        dishname: "Lasagna alla Bolognese Artigianale"
      }
    ];
  }

  onSearchChange(value: string | null | undefined) {
    // Check if value is null or undefined, if so, assign an empty string
    this.query = (value || '').toLowerCase().trim();
  
    if (this.query.length > 0) {
      this.isLoading = true;
      setTimeout(() => {
        this.restaurants = this.allRestaurants.filter((restaurant: any) => {
          return (
            restaurant.name.toLowerCase().includes(this.query) ||
            restaurant.cuisine.toLowerCase().includes(this.query) ||
            restaurant.rating.toString().includes(this.query) ||
            restaurant.price.toString().includes(this.query) ||
            restaurant.distance.toLowerCase().includes(this.query) ||
            restaurant.address.toLowerCase().includes(this.query) ||
            restaurant.dishname.toLowerCase().includes(this.query)
          );
        });
        this.isLoading = false;
      }, 3000);
    } else {
      this.restaurants = [];
    }
  }
  

  handleRestaurantClick(restaurant: any) {
    const order = {
      name: restaurant.name,
      image: restaurant.image,
      address: restaurant.address, 
      dishname: restaurant.dishname, 
      price: restaurant.price 
    };
    localStorage.setItem('order', JSON.stringify(order));
    this.navCtrl.navigateForward('/cart');
  }
}
