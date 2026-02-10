import { Page } from "@playwright/test";
import { group } from "console";

export class NavigationPage {
    
    readonly page: Page;        //this is a new field inside of this class                                   

    constructor(page: Page) {   //the constructor expects a page parameter to be passed inside on this class file
        this.page = page;       //page is our fixture related to the Playwright, and we are assigning this parameter to the local field that is related to this particular class
                                //because of this we use this.page (this means that we want to use the field, variable or property) related only to this particular class with is called page. )                               
    }
    
    async formLayoutsPage() {
        // await this.page.getByText("Forms").click();
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