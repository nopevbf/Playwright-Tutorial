import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});

test("First test", async ({ page }) => {
  await page.getByRole("link", { name: "Form Authentication" }).click();
  await page.getByLabel("Username").fill("tomsmith");
  await page.getByLabel("Password").fill("SuperSecretPassword!");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("You logged into a secure area!")).toBeVisible();
});

test("Second test", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium", "Only runs on chromium");
  await page.getByRole("link", { name: "File Upload" }).click();
});

// annotations in playwright
// https://playwright.dev/docs/test-annotations
// test.skip() - skip this test
// test.fixme() - mark test as failing, skip it
// test.fail() - mark test as failing
// test.slow() - triple the default timeout
// test.only() - run only these tests
// test.describe() - group tests
// test.describe.only() - only run tests in this group
// test.describe.skip() - skip all tests in this group
// test.describe.fixme() - mark all tests in group as failing, skip them
// test.describe.parallel() - run tests in parallel
// test.describe.serial() - run tests serially
// test.use() - override test fixtures/options for a test or group
// test.beforeAll() - run before all tests in a file/group
// test.afterAll() - run after all tests in a file/group
// test.beforeEach() - run before each test in a file/group
// test.afterEach() - run after each test in a file/group
