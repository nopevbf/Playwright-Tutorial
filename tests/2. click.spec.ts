import { test, expect } from "@playwright/test";

test("Second test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "Form Authentication" }).click();
  await page.pause();
});
