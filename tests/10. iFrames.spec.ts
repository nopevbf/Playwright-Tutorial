import { test, expect } from "@playwright/test";

test.describe("iFrames", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/frames");
  });

  test("iFrames", async ({ page }) => {
    await expect(page.locator("#frame1")).toBeVisible();
    await expect(page.frameLocator("#frame1").locator("h1")).toContainText(
      "This is a sample page"
    );
  });
});

/* Penjelasan frameLocator
frameLocator(selector) : selector adalah locator dari frame yang akan di pilih */

/* Tips untuk content dari iframe */
//Jika ingin mengecek content dari iframe, maka harus menggunakan frameLocator
//1. Cari locator iframe yang akan di cek
//2. Gunakan frameLocator untuk mengakses content iframe
//3. Gunakan locator untuk mencari element di dalam iframe
//4. Lakukan assertion pada element tersebut

//Contoh:
//await expect(page.frameLocator('#frame1').locator('h1')).toContainText('Sample Text');
//await expect(page.frameLocator('#frame2').locator('p')).toBeVisible();
