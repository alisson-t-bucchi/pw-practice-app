import { Page } from '@playwright/test';    
import { HelperBase } from './helperBase';

export class FormLayoutsPage extends HelperBase {

    constructor(page: Page) {
        super(page);
    }

    /**
     * This method is used to fill the form
     * @param email - email of the user
     * @param password - password of the user
     * @param optionText - the text of the option to be selected in the radio button
     */

    async submitFormWithCredentials(email: string, password: string, optionText: string) {

        const usingTheGridForm = this.page.locator("nb-card", {hasText: "Using the Grid"});
        await usingTheGridForm.getByRole("textbox", { name: "Email" }).fill(email);
        await usingTheGridForm.getByRole("textbox", { name: "Password" }).fill(password);
        await usingTheGridForm.getByRole("radio", { name: optionText }).check({ force: true });
        await usingTheGridForm.getByRole("button").click();
    }

    /**
     * This method will out the Inline form with user details
     * @param name - first and last name of the user
     * @param email - email of the user
     * @param rememberMe - true or false if the user session should be remembered
     */
    
    async submitFormInBasicForm(name: string, email: string, rememberMe: boolean) {

        const inlineForm = this.page.locator("nb-card", {hasText: "Inline form"});
        await inlineForm.getByRole("textbox", { name: "Jane Doe" }).fill(name);
        await inlineForm.getByRole("textbox", { name: "Email" }).fill(email);

        if(rememberMe) {
            await inlineForm.getByRole("checkbox").check({ force: true });
            await inlineForm.getByRole("button").click();
        }
    }
}