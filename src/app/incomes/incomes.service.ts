import { Injectable } from '@angular/core';
import { Income } from './incomes.model';

/**
 * Service that manages the app's incomes
 * Provides a list of initial incomes and allows them to be deleted.
 * Used in {@link AppComponent} to retrieve and process incomes.
 * 
 * @todo Replace the `incomes` array with data retrieved from a database (MySQL or other backend).
 */
@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  /**
   * Initial incomes list to be used and shown in the app.
   * 
   * @todo This array will be replaced by a DB query in future versions.
   */
  incomes: Income[] = [
    new Income('Salary', 1500),
    new Income('Sales', 700)
  ]

  /**
   * Deletes an income from the array depending on its reference.
   * @param income "Income" type object to be deleted.
   */
  delete(income: Income):void {
    const index: number = this.incomes.indexOf(income);
    this.incomes.splice(index, 1);
  }
}
