import{test,expect} from "@playwright/test"
test ("log out", async ({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.locator("#login2",{exact:true}).click()
    await page.locator("#loginusername").fill("demoblaze")
    await page.locator("#loginpassword").fill("demoblaze")
    await page.getByRole("button",{name:"Log in"}).click()
    await expect(page.getByText("Log out", { exact: true })).toBeVisible()
    await page.getByText("Log out",{exact:true}).click()
    await expect(page.locator("#login2", { exact: true })).toBeVisible();

})