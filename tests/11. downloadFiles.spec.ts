import { test, expect } from "@playwright/test";
import { locator } from "./locator";

test.describe("Download Files", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.click(locator.fileDownload);
  });

  test("Download Files", async ({ page }) => {
    const downloadPromises = page.waitForEvent("download");
    await page.locator("//a[contains(text(),'some-file.txt')]").click();
    const download = await downloadPromises;
    await page.on("download", (download) => download.path().then(console.log));

    //Wait for the download to complete
    await download.saveAs("downloaded/" + download.suggestedFilename());
    await page.pause();
  });
});

/* Penjelasan Tentang Code */
/* 
  - page.waitForEvent("download") digunakan untuk menunggu event download terjadi.
  - page.locator("//a[contains(text(),'some-file.txt')]").click() digunakan untuk menemukan elemen link dengan teks "some-file.txt" dan mengkliknya.
  - const download = await downloadPromises; mengambil event download yang telah terjadi.
  - page.on("download", (download) => download.path().then(console.log)) digunakan untuk menangani event download dan mencetak path file yang diunduh.
  - await download.saveAs("downloaded/" + download.suggestedFilename()); mengunduh file dan menyimpannya di folder "downloaded" dengan nama file yang diusulkan.
*/
