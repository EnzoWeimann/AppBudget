import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Main header of the application showing the financial summary
 * 
 * This component shows:
 * - Available budget
 * - Total incomes
 * - Total expenses
 * - Percentage of expenses in relation to income
 */
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  /**
   * Total available budget calculated as (totalIncome - totalExpense).
   * This value is computed in {@link AppComponent} and passed via @Input.
   */
  @Input() availableBudget !: number;

  /**
   * Total income amount calculated in {@link AppComponent} based on input data.
   * Passed to this component for display purposes only.
   */
  @Input() totalIncome !: number;

  /**
   * Total expense amount calculated in {@link AppComponent}.
   * Displayed as part of the financial summary.
   */
  @Input() totalExpense !: number;

  /**
   * Percentage of expenses in relation to income.
   * Calculated in {@link AppComponent} and shown here using a percent pipe.
   */
  @Input() expensePercentage !: number;
}
