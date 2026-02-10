import {test, expect} from '@playwright/test';
import { NavigationPage } from '../page-objects/navigationPage';
import { FormLayoutsPage } from '../page-objects/formLayoutsPage';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    
})

test('Using Page Objects', async ({ page }) => {
    let navigateTo = new NavigationPage(page);
    await navigateTo.formLayoutsPage();
    await navigateTo.datepickerPage();
    await navigateTo.smartTablePage();
    await navigateTo.toasterPage();
    await navigateTo.tooltipPage();

})

test('Using parametrized methods', async ({ page }) => {

    const navigateTo = new NavigationPage(page);
    const onFormLayoutsPage = new FormLayoutsPage(page);

    await navigateTo.formLayoutsPage();
    await onFormLayoutsPage.submitFormWithCredentials("test@test.com", "password123", "Option 2");
    await onFormLayoutsPage.submitFormInBasicForm("Alisson B", "alisson.bucchi@test.com", true);
    
})