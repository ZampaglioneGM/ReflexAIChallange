import { Before, Given } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { sharedContext } from "../../../drivers/browserContext";
import { navigateTo } from "../../../drivers/navigationDrivers";

Before(async () => {
  sharedContext.browser = await chromium.launch({ headless: false });
  sharedContext.page = await sharedContext.browser.newPage();
  await sharedContext.page.setViewportSize({ width: 1920, height: 1080 });
});

Given("User is logged in with valid credentials", async function () {
  console.log("User logged in");
});

Given("User is on {} Page", async function (pageName) {
  navigateTo(pageName, sharedContext.page);
});
