import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MealService } from 'src/app/services/meal.service'

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})

export class QrPage implements OnInit {

  constructor(private modalController:ModalController,
              private mealService: MealService) { }

    meals: any[] = [];

  ngOnInit() {

      this.mealService.getMeals('Seafood').subscribe((data: any) => {
        this.meals = data.meals;
      });
    }
  close(){
    this.modalController.dismiss();
  }

}
