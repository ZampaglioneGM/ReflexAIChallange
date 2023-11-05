import { PAGENAMES_URLS } from "../src/tests/pageobject/pageConstants";

export const navigateTo = async function (pageName: string, page: any) {
  console.log(`User navigated to ${pageName}`);
  await page.goto(PAGENAMES_URLS[pageName]);
  await page.goto(PAGENAMES_URLS[pageName]);
};
