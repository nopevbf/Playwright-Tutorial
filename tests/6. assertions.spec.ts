import { test, expect } from "@playwright/test";
import { locator } from "./locator";

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});

test("First test", async ({ page }) => {
  await page.click(locator.formAuthentication);
  await expect(page.locator("h2")).toHaveText("Login Page");
  await page.locator("//input[@id='username']").fill("tomsmith");
  await page.locator("//input[@id='password']").fill("SuperSecretPassword!!");
  await page.locator("//i[@class='fa fa-2x fa-sign-in']").click();
  await expect(page.locator("//div[@id='flash']")).toContainText(
    "Your password is invalid!"
  );
});

/* Apa itu assertions? */
// assertions adalah sebuah fungsi yang digunakan untuk memastikan bahwa hasil dari sebuah test sesuai dengan yang diharapkan
// assertions juga dapat digunakan untuk memastikan bahwa sebuah elemen ada di halaman, atau bahwa sebuah elemen memiliki teks tertentu

/* Apa saja assertions yang tersedia di Playwright? */
// toBeVisible
// toContainText
// toHaveText
// etc

/* Dokumentasi lengkap assertions dapat dilihat di https://playwright.dev/docs/test-assertions */
