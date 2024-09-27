import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonButton, IonButtons } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { RouterLink, RouterModule } from '@angular/router';

import {  home,helpCircleSharp, informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  //imports: [IonButtons, IonButton, IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]


})
export class MenuPage implements OnInit {

  constructor() {
    
    addIcons({home, 'help-circle-outline': helpCircleSharp, 'information-circle-outline': informationCircleOutline}) }

    

  ngOnInit() {
  }

}
