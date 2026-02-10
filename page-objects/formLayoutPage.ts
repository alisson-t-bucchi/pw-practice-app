import { Page } from '@playwright/test';    
import { read } from 'fs';

export class FormLayoutPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async submitFormWithCredentials(username: string, password: string) {
        await this.page.fill('#inputEmail3', username);
        await this.page.fill('#inputPassword3', password);
        await this.page.click('text=Sign in');
    }





}