import {test, expect} from '@playwright/test';

test('should open Users page', async ({page}) => {
    await page.goto('http://localhost:3000/users')
    await expect(page.locator('h2')).toContainText('Users')
})

test('should fill modal form and delete form', async ({page}) => {
    await page.goto('http://localhost:3000/users')
    await page.locator('text=Add User').click();
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('12');
    await page.locator('input[name="rocket"]').click();
    await page.locator('input[name="rocket"]').fill('12');
    await page.locator('input[name="twitter"]').click();
    await page.locator('input[name="twitter"]').fill('12');
    await page.locator('text=Save').click();
    await page.locator('text=121212 >> button').first().click();
    await page.locator('button:has-text("Delete")').click();
})