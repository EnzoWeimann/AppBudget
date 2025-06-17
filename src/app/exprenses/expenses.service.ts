import { Injectable } from '@angular/core';
import { Expense } from './expenses.model';

/**
 * Service that manages the app's expenses
 * Provides a list of initial expenses and allows them to be deleted.
 * Used in {@link AppComponent} to retrieve and process expenses.
 * 
 * @todo Replace the `expenses` array with data retrieved from a database (MySQL or other backend).
 */
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  /**
   * Initial expenses list to be used and shown in the app.
   * 
   * @todo This array will be replaced by a DB query in future versions.
   */
  expenses: Expense[] = [
    new Expense('Rental', 400),
    new Expense('New Clothes', 200)
  ]
  
  /**
   * Deletes an expense from the array depending on its reference.
   * @param expense "Expense" type object to be deleted.
   */
  delete(expense: Expense) {
    const index: number = this.expenses.indexOf(expense);
    this.expenses.splice(index, 1);
  }
}
