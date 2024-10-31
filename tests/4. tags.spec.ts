import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});
test.afterEach(async ({ page }) => {
  await page.close();
});

test("First test @smoke", async ({ page }) => {
  await page.getByRole("link", { name: "Form Authentication" }).click();
  await page.getByLabel("Username").fill("tomsmith");
  await page.getByLabel("Password").fill("SuperSecretPassword!");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("You logged into a secure area!")).toBeVisible();
});

test("Second test @regression", async ({ page }) => {
  await page.getByRole("link", { name: "File Upload" }).click();
  await page.goBack();
});

test("Third test @smoke", async ({ page }) => {
  await page.getByRole("link", { name: "Add/Remove Elements" }).click();
  await page.getByRole("button", { name: "Add Element" }).click();
  await expect(page.getByText("Delete")).toBeVisible();
});

test("Fourth test @regression", async ({ page }) => {
  await page.getByRole("link", { name: "Dropdown" }).click();
  await page.goBack();
});

/* Maksud pemberian Tags pada test dan cara menjalankan test dengan tag tertentu */
// npx playwright test --grep "@smoke"
// npx playwright test --grep "@regression"
