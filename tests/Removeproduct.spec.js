import{test,expect} from "@playwright/test"
test("remove product form cart",async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByText("Samsung galaxy s6",{exact:true}).click()
       page.once("dialog", async dialog => {
        expect(dialog.message()).toContain("Product added");
        await dialog.accept();
    });
    await page.getByText("Add to cart",{exact:true}).click()
    await page.getByText("Cart",{exact:true}).click()
    await expect(page.getByText("Samsung galaxy s6",{exact:true})).toBeVisible()
    await page.getByText("Delete",{exact:true}).click()
    await expect (page.getByText("Samsung galaxy s6",{exact:true})).not.toBeVisible()
})
