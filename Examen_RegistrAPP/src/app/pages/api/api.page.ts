import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { MealService } from 'src/app/services/meal.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  constructor(

    private modalController:ModalController,
              private mealService: MealService,
              private helperService: HelperService,
             private router: Router
  ) { }

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
