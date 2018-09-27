import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }


  /**
   * Perform a service for the proper items.
   */
  // getItems(ev) {
  //   let val = ev.target.value;
  //   if (!val || !val.trim()) {
  //     this.currentItems = [];
  //     return;
  //   }
  //   this.currentItems = this.items.query({
  //     name: val
  //   });
  // }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }


    /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }
}

