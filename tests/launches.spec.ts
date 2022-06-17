import {test, expect} from '@playwright/test';

test('should navigate to the launch page', async ({page}) => {
    await page.goto('http://localhost:3000/launches/')
    await page.locator('text=13Thaicom 6Jan 06, 2014Falcon 9CCAFS SLC 40Show Details >> button').click()
    await expect(page).toHaveURL('http://localhost:3000/launches/13')
    await expect(page.locator('h2')).toContainText('Thaicom 6')
})

test('should navigate to the news page', async ({page}) => {
    await page.goto('http://localhost:3000/launches/13')
    await page.locator('[data-testid="ArticleIcon"]').click()
    await expect(page).toHaveURL('https://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/')
})

test('should navigate to youtube', async ({page}) => {
    await page.goto('http://localhost:3000/launches/13')
    await page.locator('[data-testid="YouTubeIcon"]').click()
    await expect(page).toHaveURL('https://www.youtube.com/watch?v=AnSNRzMEmCU');
});

test('should navigate to details of rocket', async ({page}) => {
    await page.goto('http://localhost:3000/launches/13')
    await page.locator('[data-testid="SchoolIcon"]').click()
    await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Thaicom_6');
});

test('should change image in carousel', async ({page}) => {
    await page.goto('http://localhost:3000/launches/13')
    expect(page.locator('img[alt="Falcon 9"]').first()).toBeDefined()
    await page.locator('[aria-label="carousel indicator 2"]').click();
    expect(page.locator('img[alt="Falcon 9"]').nth(1)).toBeDefined()
});
