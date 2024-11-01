import { test, expect } from "@playwright/test";
import { locator } from "./locator";

test.describe("DropDown", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.click(locator.dropdown);
  });

  test("DropDown", async ({ page }) => {
    await page.selectOption("#dropdown", "Option 1");
    await expect(page.locator("#dropdown")).toHaveValue("1");
    await page.pause(); //pause for debugging
    //Other method
    await page.selectOption("#dropdown", { label: "Option 2" });
    await expect(page.locator("#dropdown")).toContainText("Option 2");
    await page.pause(); //pause for debugging
  });
});

/* Penjelasan selectOption
selectOption(locator, option)
locator : locator element yang akan di pilih
option : value, label, index */
