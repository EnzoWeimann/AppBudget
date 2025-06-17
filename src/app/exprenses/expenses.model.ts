/**
 * A template that represents an expense in the app.
 * It contains a description and an associated amount.
 * 
 * The template is used in {@link ExpenseService} and components like {@link FormComponent}.
 */
export class Expense{

    /**
     * Creates an expense instance.
     * 
     * @param description Expenses description, like 'food' or 'transportation'.
     * @param amount Expenses numeric amount.
     */
    constructor(
        public description: string,
        public amount: number
    ){}
}