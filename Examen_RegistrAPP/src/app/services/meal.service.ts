import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }
  getMeals(category: string) {
    return this.http.get(`${this.apiUrl}/filter.php?c=${category}`);
  }
}





