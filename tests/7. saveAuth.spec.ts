import { test, expect } from "@playwright/test";

test.describe("using cookies", () => {
  test.use({ storageState: "./storageState.json" });
  test.beforeEach(async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  });
  test.skip("Save Auth", async ({ page }) => {
    await page.locator("//a[contains(text(),'Register')]").click();
    await page.locator('[id="customer\\.firstName"]').click();
    await page.locator('[id="customer\\.firstName"]').fill("Firman");
    await page.locator('[id="customer\\.lastName"]').click();
    await page.locator('[id="customer\\.lastName"]').fill("QA");
    await page.locator('[id="customer\\.address\\.street"]').click();
    await page.locator('[id="customer\\.address\\.street"]').fill("test");
    await page.locator('[id="customer\\.address\\.city"]').click();
    await page.locator('[id="customer\\.address\\.city"]').fill("test");
    await page.locator('[id="customer\\.address\\.state"]').click();
    await page.locator('[id="customer\\.address\\.state"]').fill("test");
    await page.locator('[id="customer\\.address\\.zipCode"]').click();
    await page.locator('[id="customer\\.address\\.zipCode"]').fill("test");
    await page.locator('[id="customer\\.phoneNumber"]').click();
    await page.locator('[id="customer\\.phoneNumber"]').fill("test");
    await page.locator('[id="customer\\.ssn"]').click();
    await page.locator('[id="customer\\.ssn"]').fill("test");
    await page.locator('[id="customer\\.username"]').click();
    await page.locator('[id="customer\\.username"]').fill("firmanqatester22");
    await page.locator('[id="customer\\.password"]').click();
    await page.locator('[id="customer\\.password"]').fill("qwertyuiop2207");
    await page.locator("#repeatedPassword").click();
    await page.locator("#repeatedPassword").fill("qwertyuiop2207");
    await page.getByRole("button", { name: "Register" }).click();
    // save auth
    await page.context().storageState({ path: "storageState.json" });
  });

  // test("Login", async ({ page }) => {
  //   await expect(
  //     page.locator("//h2[contains(text(),'Account Services')]")
  //   ).toBeVisible();
  // });
});
