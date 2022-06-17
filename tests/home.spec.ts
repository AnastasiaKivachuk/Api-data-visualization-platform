import {test, expect} from '@playwright/test';
import {HOME_ROUTE, LAUNCHES_ROUTE, USERS_ROUTE} from "../src/constants/routes.constants";


test('should navigate to the users page', async ({page}) => {
    await page.goto('http://localhost:3000/')
    await page.click('text=Users')
    await expect(page).toHaveURL(`http://localhost:3000${USERS_ROUTE}`)
    await expect(page.locator('h2')).toContainText('Users')
})


test('should navigate to the launches page', async ({page}) => {
    await page.goto('http://localhost:3000/')
    await page.click('text=Launches')
    await expect(page).toHaveURL(`http://localhost:3000${LAUNCHES_ROUTE}`)
    await expect(page.locator('h2')).toContainText('Launches')
})

test('should navigate to the home page', async ({page}) => {
    await page.goto('http://localhost:3000/');
    await expect(page.locator('a').first()).toHaveAttribute('href', HOME_ROUTE);
    await expect(page).toHaveTitle(/Space X/);
});

test('should navigate to details of ship', async ({page}) => {
    await page.goto('http://localhost:3000/');
    await page.locator('text=GO Ms Tree - 2015Learn More >> button').click();
    await expect(page).toHaveURL('https://www.marinetraffic.com/en/ais/details/ships/shipid:3439091/mmsi:368335000/imo:9744465/vessel:MR_STEVEN_MCCALL');
});

test('should navigate to details of rocket', async ({page}) => {
    await page.goto('http://localhost:3000/');
    await page.locator('text=RocketsFalcon 1The Falcon 1 was an expendable launch system privately developed  >> button').first().click()
    await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Falcon_1');
});

test('should navigate to site of Founder', async ({page}) => {
    await page.goto('http://localhost:3000/');
    await page.locator('text=FounderElon Musk >> a').click()
    await expect(page).toHaveURL('https://twitter.com/elonmusk');
});