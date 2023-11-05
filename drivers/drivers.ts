import { Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

export const clickElement = async function (locator: string, page: any) {
  await page.locator(locator).click();
};

export const validateElementisVisible = async (locator: string, page: any) => {
  const pageElement = page.locator(locator);
  await expect(pageElement).toBeVisible({ timeout: 20000 });
};

export const validateElementHaveText = async function (
  locator: string,
  text: string,
  page: any
) {
  const pageElement = page.locator(locator);
  await expect(pageElement).toHaveText(text);
};

export const waitForElement = async function (locator: string, page: any) {
  await page.waitForSelector(locator, { state: "visible" });
};

export const waitSeconds = async function (timeout: number, page: any) {
  await page.waitForTimeout(timeout);
};

export const setTimeout = async function (timeout: number, page: any) {
  await page.setDefaultTimeout(10000);
};

export const hoverElement = async function (locator: string, page: any) {
  await page.getByText("Item").hover();
};

export const expectAtributeToBe = async function (
  locator: string,
  expected: string,
  page: any
) {
  const element: any  = await page.waitForSelector(locator, { timeout: 5000 });
  const attributeValue: string  = await element.getAttribute('selected');
  expect(attributeValue).toBe(expected);
};
