import { expect } from "playwright/test";
import { test } from "../fixtures/e2e-fixture";

test("Verify that user can view order summary at the payment page ", async ({ configuration, page, context, summaryTopUpPage }) => {
  test.setTimeout(120000);
  await page.goto(configuration.appSetting.baseURL);
  await context.addCookies([
    {
      name: 'LTPlusCookies',
      value: '{"analyticsData":true,"marketingData":true}',
      domain: '.xn--m3ca1athe9asc7b2b6iqe.com',
      path: '/',
    }
  ]);
  await page.goto(configuration.appSetting.baseURL);
  await summaryTopUpPage.goTopUpPage();
  const topupAmount = await summaryTopUpPage.fillRandomAmount();
  await summaryTopUpPage.InputTopUpValue(topupAmount);
  await summaryTopUpPage.confirmTopup(topupAmount);
});

test("Verify that user cannot topup when user doesn't input Topup amount ", async ({ configuration, page, context, summaryTopUpPage }) => {
  test.setTimeout(120000);
  await page.goto(configuration.appSetting.baseURL);
  await context.addCookies([
    {
      name: 'LTPlusCookies',
      value: '{"analyticsData":true,"marketingData":true}',
      domain: '.xn--m3ca1athe9asc7b2b6iqe.com',
      path: '/',
    }
  ]);
  await page.goto(configuration.appSetting.baseURL);
  await summaryTopUpPage.goTopUpPage();

});