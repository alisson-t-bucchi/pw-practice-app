import { test } from '../test-options';
import { PageManager } from '../page-objects/pageManager';
import { faker } from '@faker-js/faker';


test('Using parametrized methods', async ({ page, formlayoutsPage }) => {
    const pm = new PageManager(page);
    const randomName = faker.person.fullName();
    const randomEmail = `${randomName.replace(' ', '')}${faker.number.int(1000)}@gmail.com`;

    //await pm.navigateTo().formLayoutsPage();
    await pm.onFormLayoutsPage().submitFormWithCredentials(process.env.Email, process.env.Password, "Option 2");
    await pm.onFormLayoutsPage().submitFormInBasicForm(randomName, randomEmail, true) 

})