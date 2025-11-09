import { expect } from '@playwright/test';

export async function signup(page, username, password) {
  await page.goto('http://localhost:5173/signup');

  await page.fill('input[id="username"]', username);
  await page.fill('input[id="password"]', password);

  await page.click('button[type="submit"]');

  // optional: wait for redirect or confirmation
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible()
}