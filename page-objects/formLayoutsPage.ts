import { Page } from '@playwright/test';    
import { read } from 'fs';
import { using } from 'rxjs';

export class FormLayoutsPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async submitFormWithCredentials(email: string, password: string, optionText: string) {

        const usingTheGridForm = this.page.locator("nb-card", {hasText: "Using the Grid"});
        await usingTheGridForm.getByRole("textbox", { name: "Email" }).fill(email);
        await usingTheGridForm.getByRole("textbox", { name: "Password" }).fill(password);
        await usingTheGridForm.getByRole("radio", { name: optionText }).check({ force: true });
        await usingTheGridForm.getByRole("button").click();
    }





}