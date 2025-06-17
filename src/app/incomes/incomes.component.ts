import { Component } from '@angular/core';
import { Income } from './incomes.model';
import { IncomeService } from './incomes.service';
import { CommonModule } from '@angular/common';

/**
 * Component that shows a list of all registered incomes.
 * 
 * It also allows to delete an individual income.
 */
@Component({
  selector: 'app-incomes',
  imports: [CommonModule ],
  templateUrl: './incomes.component.html'
})
export class IncomesComponent {
  /**
   * List of incomes fetched from the service {@link IncomeService}
   */
  incomes: Income[] = [];

  /**
   * Income service injection and initialization of incomes array.
   * @param incomeService Service resposible of handling incomes.
   */
  constructor(private incomeService: IncomeService){
    this.incomes = this.incomeService.incomes;
  }

  /**
   * Deletes a specific income from the list.
   * @param income 'Income' type object to be deleted.
   */
  deleteIncome(income: Income){
    this.incomeService.delete(income);
  }
}
