import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://web:5000');

  // Expect a title "to contain" a substring.
  // await expect(page).toBeTitle('Example Domain');
});
