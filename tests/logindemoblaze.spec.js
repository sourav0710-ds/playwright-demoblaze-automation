import { test } from '@playwright/test';

test('Login Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('demoblaze');

    await page.locator('#loginpassword').fill('demoblaze');

    await page.getByRole('button', { name: 'Log in' }).click();

});