import{test,expect} from "@playwright/test"
test("place order",async ({page}) =>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByText("Samsung galaxy s6",{exact:true}).click()
    page.once("dialog",async dialog =>{
        expect(dialog.meassage()).tocontain("Product added")
    })
    await page.getByText("Add to cart",{exact:true}).click()
    await page.getByText("Cart",{exact:true}).click()
    await expect (page.getByText("Samsung galaxy s6")).toBeVisible()
    await page.getByText("Place Order",{exact:true}).click()
    //with id locator we use #
    await page.locator("#name").fill("sourav")
    await page.locator("#country").fill("india")
    await page.locator("#city").fill("Hamirpur(HP)")
    await page.locator("#card").fill("1234567890123456")
    await page.locator("#month").fill("07")
    await page.locator("#year").fill("2004")
    await page.getByRole("button",{name:"Purchase"}).click()
    await expect(
        page.getByText("Thank you for your purchase!")).toBeVisible()
})