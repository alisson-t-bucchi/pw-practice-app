import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";
import { group } from "console";

export class NavigationPage extends HelperBase {                                      

    constructor(page: Page) {                                          
        super(page);
    }
    
    async formLayoutsPage() {
        await this.selectGroupMenuItem("Forms");
        await this.page.getByText("Form Layouts").click();
        await this.waitForNumberOfSeconds(2);        
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
            await expect(groupMenuItem).toHaveAttribute("aria-expanded", "true");
        }
    }

    

}