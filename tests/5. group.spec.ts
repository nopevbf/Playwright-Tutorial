import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});
test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe("Group of tests", () => {
  test("First test @smoke", async ({ page }) => {
    await page.getByRole("link", { name: "Form Authentication" }).click();
    await page.locator("//input[@id='username']").fill("tomsmith");
    await page.locator("//input[@id='password']").fill("SuperSecretPassword!");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(
      page.getByText("You logged into a secure area!")
    ).toBeVisible();
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
});

/* Penjelasan Describe dalam Playwright */
// describe adalah sebuah group dari test, yang memungkinkan kita untuk mengelompokkan test yang berhubungan dengan topik yang sama
// beforeEach dan afterEach adalah hooks yang akan dijalankan sebelum dan sesudah setiap test dalam group
// test.beforeEach dan test.afterEach adalah hooks yang akan dijalankan sebelum dan sesudah setiap test dalam group
