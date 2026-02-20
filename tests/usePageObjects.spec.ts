import {test, expect} from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    
})

test('Using Page Objects', async ({ page }) => {
    const pm = new PageManager(page);
   
    await pm.navigateTo().formLayoutsPage();
    await pm.navigateTo().datepickerPage();
    await pm.navigateTo().smartTablePage();
    await pm.navigateTo().toasterPage();
    await pm.navigateTo().tooltipPage();

})

test('Using parametrized methods', async ({ page }) => {
    const pm = new PageManager(page);
    const randomName = faker.person.fullName();
    //const randomEmail = faker.internet.email();~
    const randomEmail = faker.internet.email({ firstName: randomName.split(' ')[0], lastName: randomName.split(' ')[1] });

    await pm.navigateTo().formLayoutsPage();
    await pm.onFormLayoutsPage().submitFormWithCredentials("test@test.com", "password123", "Option 2");
    await pm.onFormLayoutsPage().submitFormInBasicForm(randomName, randomEmail, true);
    await pm.navigateTo().datepickerPage();
    await pm.onDatepickerPage().selectDatePickerFromToday(7);
    await pm.onDatepickerPage().selectDatePickerFromTodayWithRange(7, 14);

})