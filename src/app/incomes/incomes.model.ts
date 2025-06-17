/**
 * A template that represents an income in the app.
 * It contains a description and an associated amount.
 * 
 * The template is used in {@link IncomeService} and components like {@link FormComponent}.
 */
export class Income{

    /**
    * Creates an income instance.
    * 
    * @param description Income description, like 'Salary' or 'sales'.
    * @param amount Income numeric amount.
    */
    constructor(
        public description: string,
        public amount: number
    ){}
}