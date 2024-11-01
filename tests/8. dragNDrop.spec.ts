import { test, expect } from "@playwright/test";
import { locator } from "./locator";

test.describe("Drag and Drop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.click(locator.dragAndDrop);
  });

  test("Drag and Drop", async ({ page }) => {
    await page.dragAndDrop("#column-a", "#column-b");
    await expect(page.locator("#column-b")).toHaveText("A");
    await expect(page.locator("#column-a")).not.toHaveText("A");
    await page.pause();
    await page.dragAndDrop("#column-b", "#column-a");
    await expect(page.locator("#column-b")).toHaveText("B");
    await expect(page.locator("#column-a")).not.toHaveText("B");
    await page.pause();
  });
});

/* Penjelasan dragAndDrop
dragAndDrop(source, target)
source : locator element yang akan di drag
target : locator element yang akan di drop */
