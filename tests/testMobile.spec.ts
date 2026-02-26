import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator(".sidebar-toggle").click();
    await page.getByText("Forms").click()
    await page.getByText('Form Layouts').click()
    await page.locator(".sidebar-toggle").click();
});

test("input fields", async ({ page }) => {
    const usingTheGridEmailInput = page.locator("nb-card", { hasText: "Using the Grid" }).getByRole("textbox", { name: "Email" });
    await usingTheGridEmailInput.fill("anduin.wrynn@gmail.com");
    await usingTheGridEmailInput.clear(); //u can not chain it

    await usingTheGridEmailInput.pressSequentially("arthas@gmail.com"); // {delay: 500}) //it type slower

    //generic asertion
    const inputValue = await usingTheGridEmailInput.inputValue();
    expect(inputValue).toEqual("arthas@gmail.com");

    //locator assertion
    await expect(usingTheGridEmailInput).toHaveValue("arthas@gmail.com");
  });