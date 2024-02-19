import type { Page } from "playwright-core";

import { DEFAULT_PLAYWRIGHT_PAGE_SCREENSHOT_OPTIONS } from "~/tests/acceptance/features/playwright/step-definitions/screenshots/constants/playwright-screenshots.constants";
import type { CustomWorld } from "~/tests/acceptance/shared/types/word.types";

async function saveFullPageScreenshot(page: Page, screenshotPath: string): Promise<void> {
  console.info(`The snapshot with path "${screenshotPath}" does not exist. Creating a new snapshot.`);
  await page.screenshot({
    path: screenshotPath,
    ...DEFAULT_PLAYWRIGHT_PAGE_SCREENSHOT_OPTIONS,
  });
}

function throwErrorIfBrokenThreshold(world: CustomWorld, pixelDiff: number, name: string): void {
  const maxPixelDiff = 200;
  console.info(`The pixel diff for snapshot with name "${name}" is ${pixelDiff} px`);
  if (pixelDiff > maxPixelDiff) {
    throw new Error(`The snapshot with name "${name}" does not match the expected screenshot because the pixel diff is ${pixelDiff} which is greater than the allowed ${maxPixelDiff} pixel diff threshold`);
  }
}

export {
  saveFullPageScreenshot,
  throwErrorIfBrokenThreshold,
};