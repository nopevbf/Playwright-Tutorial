import { test, expect } from "@playwright/test";
import { locator } from "./locator";
import path from "path";

test.describe("File Uploaded", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.click(locator.fileUpload);
  });

  test("File Uploaded", async ({ page }) => {
    //Metode 1
    /*
    await page.setInputFiles(
      "//input[@id='file-upload']",
      "uploaded/sample.txt"
    );
    await page.click("//input[@id='file-submit']");
    await expect(page.locator("//h3")).toHaveText("File Uploaded!");
    await expect(page.locator("//div[@id='uploaded-files']")).toHaveText(
      "sample.txt"
    );
    await page.pause();
    */
    //Metode 2
    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.locator("//input[@id='file-upload']").click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, "../uploaded/sample.txt"));
    await page.click("//input[@id='file-submit']");
    await expect(page.locator("//h3")).toHaveText("File Uploaded!");
    await expect(page.locator("//div[@id='uploaded-files']")).toHaveText(
      "sample.txt"
    );
    await page.pause();
  });
});

/* Penjelasan tentang code di atas:
- page.waitForEvent('filechooser') adalah untuk menunggu event file chooser
- page.locator("//input[@id='file-upload']").click() adalah untuk menekan tombol upload file
- const fileChooser = await fileChooserPromise; adalah untuk mendapatkan file chooser
- await fileChooser.setFiles(path.join(__dirname, "../uploaded/sample.txt")) adalah untuk mengirim file yang akan di upload
*/

/* Penjabaran Perbedaan Metode 1 dan Metode 2 */
/* 
Metode 1:
- Menggunakan page.setInputFiles() langsung untuk mengatur file yang akan diupload
- Lebih sederhana dan straightforward
- Cocok untuk kasus sederhana dimana kita tahu pasti lokasi file input
- Tidak memerlukan handling event filechooser

Metode 2:
- Menggunakan event filechooser untuk menangani dialog pemilihan file
- Lebih mirip dengan interaksi user yang sebenarnya (clicking dan memilih file)
- Lebih robust untuk handling berbagai jenis dialog file upload
- Memerlukan promise dan event handling
- Cocok untuk kasus yang lebih kompleks atau ketika perlu mensimulasikan interaksi user secara lebih detail

Kedua metode valid tergantung kebutuhan:
- Metode 1 lebih simpel jika hanya perlu mengupload file
- Metode 2 lebih realistis dalam mensimulasikan interaksi user
*/
