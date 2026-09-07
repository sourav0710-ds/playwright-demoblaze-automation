// import { test, expect } from "@playwright/test";

// test("Verify DemoBlaze Homepage", async ({ page }) => {

//     await page.goto("https://www.demoblaze.com/", {
//         waitUntil: "domcontentloaded",
//         timeout: 60000
//     });

//     await expect(page).toHaveTitle("STORE");

// });
import { test, expect } from "@playwright/test";

test("Verify DemoBlaze Homepage", async ({ page }) => {

    await page.goto("https://www.demoblaze.com/");

    await expect(page).toHaveTitle("STORE");

});