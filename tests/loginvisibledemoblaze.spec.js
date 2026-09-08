import { test, expect } from "@playwright/test";

test("Verify DemoBlaze login", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");

    await expect(page.locator("#login2")).toBeVisible();
});