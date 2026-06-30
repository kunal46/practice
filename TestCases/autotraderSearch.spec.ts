import { test, expect } from '@playwright/test';

test('Search Honda from AutoTrader homepage', async ({ page }) => {
  await page.goto('https://www.autotrader.ca/', { waitUntil: 'domcontentloaded' });

  await page.locator('#make').selectOption({ label: 'Honda' });

  const searchLink = page.locator('#search-mask-search-cta');
  await expect(searchLink).toHaveAttribute('href', /\/cars\/honda/);

  const searchUrl = await searchLink.getAttribute('href');
  expect(searchUrl).toBeTruthy();

  await page.goto(searchUrl!, { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveURL(/\/cars\/honda/);
});
