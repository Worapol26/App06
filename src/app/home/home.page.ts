import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) { }

  Gotodetail(i: any) {
    this.detail.navigateForward('/detail', { state: { i } });
  }












  items = [
    {
      id: 1,
      Name: "IPhone 15 Pro Max",
      Price: 39900,
      Detail: "This is a IPhone 15 Pro Max by apple",
      imgURL: "assets/img/product/i15promax 1.png"
    },

    {
      id: 2,
      Name: "Samsung S24 Ultar",
      Price: 34900,
      Detail: "This is a Samsung S24 Ultar by Samsung",
      imgURL: "assets/img/product/s24u 1.png"
    },

    {
      id: 3,
      Name: "Samsung A54 5G",
      Price: 19900,
      Detail: "This is a Samsung A54 5G by Samsung",
      imgURL: "assets/img/product/A54 1.png"
    },

    {
      id: 4,
      Name: "Xiaomi 14T Pro ",
      Price: 19900,
      Detail: "This is a Xiaomi 14T Pro by Xiami",
      imgURL: "assets/img/product/mi14tpro 1.png"
    },


  ]

}
