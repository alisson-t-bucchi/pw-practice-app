import {test as base} from '@playwright/test';

export type TestOptions = {
    globalsQAURL: string;
    formlayoutsPage: string;
};  

export const test = base.extend<TestOptions>({
    globalsQAURL: ['', {option: true}],

    formlayoutsPage: [
        async ({page}, use) => {
            await page.goto('http://localhost:4200/')
            await page.getByText("Forms").click()
            await page.getByText('Form Layouts').click()
            await use('')
        },
        {auto: true}
    ],
});