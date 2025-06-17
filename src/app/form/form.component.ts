import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncomeService } from '../incomes/incomes.service';
import { ExpenseService } from '../exprenses/expenses.service';
import { Income } from '../incomes/incomes.model';
import { Expense } from '../exprenses/expenses.model';

/**
 * Form component responsible for adding income and expenses to the app.
 * 
 * Allows the user to enter a description and amount, and also select the type of trasaction.
 * Uses the services {@link IncomeService} and {@link ExpenseService} to save the data.
 */
@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html'
})
export class FormComponent {

  /**
   * Default type of transaction. In the HTML form it can be changed to 'expenseOperation'.
   */
  type: string = "incomeOperation"

  /**
   * Value of the form's description input. Null by default.
   */
  descriptionInput: string | null = null;

  /**
   * Value of the form's amount input. Null by default.
   */
  amountInput: number | null = null;

  /**
   * Services injection to handle incomes and expenses. 
   * 
   * @param incomeService Service of incomes.
   * @param expenseService Service of expenses.
   */
  constructor(
    private incomeService: IncomeService, 
    private expenseService: ExpenseService
  ){}

  /**
   * Handles the transaction's type change in the form (income or expense).
   * 
   * @param event Change event triggered in the form's selector.
   */
  typeOperation(event: Event): void{
    const selectedElement = event.target as HTMLSelectElement;
    this.type = selectedElement.value;
  }

  /**
   * Adds a new income or expense, depending on the transaction type:
   * - If the type is 'incomeOperation', creates a new Income object.
   * - If the type is 'expenseOperation', creates a new Expense object.
   * 
   * If description or amount values are not valid, a message is shown in the console.
   */
  addNew(): void{
    if(this.descriptionInput != null && this.amountInput != null){
      if(this.type === 'incomeOperation'){
        this.incomeService.incomes.push(
          new Income(this.descriptionInput, this.amountInput)
        );
      } else {
        this.expenseService.expenses.push(
          new Expense(this.descriptionInput, this.amountInput)
        )
      }
    } else {
      console.log('Introduce valid description and amount values.')
    }

    //Clean form's input fields
    this.descriptionInput = null;
    this.amountInput = null;
  }
}
