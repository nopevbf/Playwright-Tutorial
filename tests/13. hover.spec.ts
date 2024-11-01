import { test, expect } from "@playwright/test";
import { locator } from "./locator";

test.describe("Hover", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator(locator.hovers).click();
  });

  test("Hover over images", async ({ page }) => {
    await page.hover("//body/div[2]/div[1]/div[1]/div[1]/img[1]");
    await expect(
      page.locator(
        "//div[@class='figcaption']//h5[contains(text(),'name: user1')]"
      )
    ).toHaveText("name: user1");
    await page.click("//div[@class='figcaption']//a[1]");
    await expect(page.locator("//h1")).toHaveText("Not Found");
  });
});

/* Penjelasan */
/*
- page.hover() digunakan untuk menghover mouse ke elemen tertentu
- page.locator() digunakan untuk menentukan elemen yang akan diuji
- expect().toHaveText() digunakan untuk memastikan teks yang diharapkan ada pada elemen yang diuji
*/

/* Step penggunaan method hover:
1. Gunakan page.hover() untuk menghover mouse ke elemen yang diinginkan
2. Gunakan page.locator() untuk memilih elemen yang akan diverifikasi setelah hover
3. Gunakan expect().toHaveText() untuk memverifikasi teks yang muncul setelah hover
4. Jika perlu klik link yang muncul setelah hover, gunakan page.click()
5. Verifikasi hasil setelah klik dengan expect() */
