import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from "./form/form.component";
import { IncomesComponent } from "./incomes/incomes.component";
import { ExpensesComponent } from "./exprenses/expenses.component";
import { Income } from './incomes/incomes.model';
import { Expense } from './exprenses/expenses.model';
import { IncomeService } from './incomes/incomes.service';
import { ExpenseService } from './exprenses/expenses.service';

/**
 * App's root component
 * 
 * Is responsible for:
 * - Obtain incomes and expenses from the services
 * - Calculate total values and expenses percentage
 * - Transfer the data to the HeaderComponent to render it
 */
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormComponent, IncomesComponent, ExpensesComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  /**
   * Incomes array fetched from the {@link IncomeService}
   */
  incomes: Income[] = [];

  /**
   * Expenses array fetched from the {@link ExpenseService}
   */
  expenses: Expense[] = [];

  /**
   * Constructor that injects the services and initializes the data arrays.
   * 
   * @param incomeService Service that provides incomes.
   * @param expenseService Service that provides expenses.
   */
  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ){
    this.incomes = this.incomeService.incomes;
    this.expenses = this.expenseService.expenses;
  }

  /**
   * Calculate total income by adding the amounts of all income.
   * @returns Total income as a number.
   */
  getTotalIncome():number {
    let totalIncome: number = 0;
    this.incomes.forEach(income => {
      totalIncome += income.amount;
    });

    return totalIncome;
  }

  /**
   * Calculate total expenses by adding the amounts of all expense.
   * @returns Total expenses as a number.
   */
  getTotalExpense():number {
    let totalExpense : number = 0;
    this.expenses.forEach(expense => {
      totalExpense += expense.amount;
    });

    return totalExpense;
  }

  /**
   * Calculate percentage of expenses in relation to total income.
   * @returns Percentage as a number between 0 and 1.
   */
  getExpensePercentage():number {
    return this.getTotalExpense()/this.getTotalIncome();
  }

  /**
   * Calculate available budget by subtracting total expenses from total income.
   * @returns Available budget as a number.
   */
  getAvailableBudget():number {
    return this.getTotalIncome() - this.getTotalExpense();
  }

}
