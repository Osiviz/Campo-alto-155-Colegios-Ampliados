import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Curso } from '../../models/curso';
import { CursosProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Curso[];

  constructor(public navCtrl: NavController, public cursos: CursosProvider, public modalCtrl: ModalController) {
    this.currentItems = this.cursos.query();
  }

//   /**
//    * The view loaded, let's query our items for the list
//    */
//   ionViewDidLoad() {
//   }


//   /**
//    * Perform a service for the proper items.
//    */
//   // getItems(ev) {
//   //   let val = ev.target.value;
//   //   if (!val || !val.trim()) {
//   //     this.currentItems = [];
//   //     return;
//   //   }
//   //   this.currentItems = this.items.query({
//   //     name: val
//   //   });
//   // }

//   /**
//    * Navigate to the detail page for this item.
//    */
//   openItem(curso: Curso) {
//     this.navCtrl.push('ItemDetailPage', {
//       curso: curso
//     });
//   }
//     /**
//    * Delete an item from the list of items.
//    */
//   deleteItem(curso) {
//     this.cursos.delete(curso);
//   }
 }

