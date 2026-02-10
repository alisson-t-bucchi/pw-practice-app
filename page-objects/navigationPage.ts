import { Locator, Page } from "@playwright/test";

export class NavigationPage {
    
    readonly page: Page;                                           

    constructor(page: Page) {                                          
        this.page = page;
    }
    
    async formLayoutsPage() {
        await this.selectGroupMenuItem("Forms");
        await this.page.getByText("Form Layouts").click();        
    }

    async datepickerPage() {
        await this.selectGroupMenuItem("Forms");
        await this.page.waitForTimeout(1000);
        await this.page.getByText("Datepicker").click();        
    }

    async smartTablePage() {    
        await this.selectGroupMenuItem("Tables & Data");
        await this.page.getByText("Smart Table").click();        
    }  

    async toasterPage() {
        await this.selectGroupMenuItem("Modal & Overlays");
        await this.page.getByText("Toastr").click();        
    }

    async tooltipPage() {
        await this.selectGroupMenuItem("Modal & Overlays");
        await this.page.getByText("Tooltip").click();        
    }

    private async selectGroupMenuItem(groupItemTile: string){

        const groupMenuItem = this.page.getByTitle(groupItemTile);
        const expanded = await groupMenuItem.getAttribute("aria-expanded");

        if(expanded === "false"){
            await groupMenuItem.click();
        }
    }

    

}