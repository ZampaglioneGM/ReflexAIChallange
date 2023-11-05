import { Browser, Page } from "@playwright/test";

export const sharedContext = {
  browser: undefined as Browser | undefined,
  page: undefined as Page | undefined,
};
