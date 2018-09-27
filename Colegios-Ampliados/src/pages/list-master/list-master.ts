import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  //currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items) {
    
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }




  }

