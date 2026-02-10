import {test, expect} from '@playwright/test';
import { NavigationPage } from '../page-objects/navigationPage';

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