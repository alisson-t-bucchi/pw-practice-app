import { Page, expect } from '@playwright/test';    
import { HelperBase } from './helperBase';

export class DatepickerPage extends HelperBase {

    constructor(page: Page) {
        super(page);
    }

    async selectDatePickerFromToday(numberOfDays: number) {
        
        const calendarInput = this.page.getByPlaceholder('Form Picker')
        await calendarInput.click()
        
        const dateSelector = await this.selectDateInTheCalendar(numberOfDays)
        await expect(calendarInput).toHaveValue(dateSelector)

    }

    async selectDatePickerFromTodayWithRange(starDay: number, endDay: number) { 
        const calendarInput = this.page.getByPlaceholder('Range Picker')
        await calendarInput.click()
        
        const dateSelectorStart = await this.selectDateInTheCalendar(starDay)
        const dateSelectorEnd = await this.selectDateInTheCalendar(endDay)
        const expectedRange = `${dateSelectorStart} - ${dateSelectorEnd}`
        await expect(calendarInput).toHaveValue(expectedRange)

    }

    private async selectDateInTheCalendar(numberOfDays: number) {
    let date = new Date()
    date.setDate(date.getDate() + numberOfDays) //get date 1 days in the future
          
    const futureDay = date.getDate().toString()
    const futureMonthShort = date.toLocaleString('En-US', {month: 'short'})
    const futureMonthLong = date.toLocaleString('En-US', {month: 'long'})
    const futureYear = date.getFullYear()
    const dateSelector = `${futureMonthShort} ${futureDay}, ${futureYear}`
        
    let calendarMonthYear = await this.page.locator('nb-calendar-view-mode').textContent()
    const expectedMonthYear = `${futureMonthLong} ${futureYear}`
        
        while(!calendarMonthYear.includes(expectedMonthYear)){
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            calendarMonthYear = await this.page.locator('nb-calendar-view-mode').textContent()
        }
        
        await this.page.locator('.day-cell.ng-star-inserted').getByText(futureDay, {exact: true}).click() 
        return dateSelector
    }

}