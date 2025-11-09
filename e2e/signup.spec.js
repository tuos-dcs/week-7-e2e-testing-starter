import { test, expect } from '@playwright/test';

test('user can sign up', async ({ page }) => {
  await page.goto('http://localhost:5173/signup');

  await page.fill('input[id="username"]', 'testuser1');
  await page.fill('input[id="password"]', 'Password1!');

  await page.click('button[type="submit"]');

  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible()
});
