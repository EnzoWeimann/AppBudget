import { Component, Input } from '@angular/core';
import { Expense } from './expenses.model';
import { ExpenseService } from './expenses.service';
import { CommonModule } from '@angular/common';

/**
 * Component that shows a list of all registered expenses.
 * 
 * It also allows to delete an individual expense 
 * and calculate the percentage it represents of total income.
 */
@Component({
  selector: 'app-expenses',
  imports: [CommonModule],
  templateUrl: './expenses.component.html'
})
export class ExpensesComponent {

  /**
   * List of expenses fetched from the service {@link ExpenseService}
   */
  expenses: Expense[] = [];

  /**
   * Total income calculated in {@link AppComponent},
   * necesary to calculate percentage of each expense.
   */
  @Input() totalIncome !: number;

  /**
   * Expense service injection and initialization of expenses array.
   * @param expenseService Service resposible of handling expenses.
   */
  constructor(private expenseService: ExpenseService){
    this.expenses = this.expenseService.expenses;
  }

  /**
   * Deletes a specific expense from the list.
   * @param expense 'Expense' type object to be deleted.
   */
  deleteExpense(expense: Expense):void {
    this.expenseService.delete(expense);
  }

  /**
   * Calculates perecetage of every expense relative to total income.
   * 
   * @param expense 'Expense' type object of which to calculate the percentage.
   * @returns Percentage of the provided expense object.
   */
  calculatePercentage(expense: Expense):number {
    return expense.amount / this.totalIncome;
  }
}
