// @ts-check
const { test, expect } = require('@playwright/test');

test('Verify website title', async ({ page }) => {
  // 1. Navigate to a URL
  await page.goto('https://playwright.dev');

  // 2. Perform an action or assertion
  // Check if the title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
  
  // 3. Example interaction: Click a button
  // 'get_started_link' is a made-up name for readability
  await page.getByRole('link', { name: 'Get started' }).click();

  // 4. Verify the URL changed
  await expect(page).toHaveURL(/.*intro/);
});