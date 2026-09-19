import { test, expect } from "@playwright/test";

test("verify cart total", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.getByText("Samsung galaxy s6", { exact: true }).click();
    page.once("dialog", async dialog => {
        expect(dialog.message()).toContain("Product added");
        await dialog.accept();
    });
    await page.getByText("Add to cart", { exact: true }).click();
    await page.getByText("Cart", { exact: true }).click();
    await expect(
        page.getByText("Samsung galaxy s6", { exact: true })
    ).toBeVisible();
    await expect(page.locator("#tbodyid tr").first()).toContainText("360");
    await expect(page.locator("#totalp")).toHaveText("360");
});