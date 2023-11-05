import { Before, Given } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { sharedContext } from "../../../drivers/browserContext";
import { navigateTo } from "../../../drivers/navigationDrivers";

Before(async () => {
  sharedContext.browser = await chromium.launch({ headless: false });
  sharedContext.page = await sharedContext.browser.newPage();
  await sharedContext.page.setViewportSize({ width: 360, height: 728 });
});

Given("User is logged in with valid credentials on mobile", async function () {
  console.log("User logged in");
});

