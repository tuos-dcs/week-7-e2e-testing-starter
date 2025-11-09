import { test, expect } from '@playwright/test';
import { signup } from "./helpers.js";

test('user can create a post', async ({ page }) => {
  await signup(page, "createPostUser", "Password1!");
  await page.goto('http://localhost:5173/newpost');

  const NEW_POST_TITLE = 'New Post Title';
  const NEW_POST_BODY = 'New Post Body'

  await page.fill('input[id="title"]', NEW_POST_TITLE);
  await page.fill('input[id="body"]', NEW_POST_BODY);

  await page.click('button[type="submit"]');

  await expect(page.getByText(`Title: ${NEW_POST_TITLE}`)).toBeVisible();
  await expect(page.getByText(NEW_POST_BODY)).toBeVisible();

});
