/* Locator adalah sebuah objek yang digunakan untuk menentukan elemen pada halaman web */
// locator dapat berupa selector CSS, XPath, atau elemen HTML

/* Contoh penggunaan locator */
// await page.locator("//a[contains(text(),'A/B Testing')]").click();

/* Dokumentasi lengkap locator dapat dilihat di https://playwright.dev/docs/locators */

/* Contoh penggunaan locator dengan menggunakan objek */
// await page.click(locator.abTesting);

/* export file untuk locator dan cara memanggilnya di test */
// import { locator } from "./locator";

export const locator = {
  abTesting: "//a[contains(text(),'A/B Testing')]",
  addRemoveElements: "//a[contains(text(),'Add/Remove Elements')]",
  basicAuth: "//a[contains(text(),'Basic Auth')]",
  brokenImages: "//a[contains(text(),'Broken Images')]",
  checkboxes: "//a[contains(text(),'Checkboxes')]",
  contextMenu: "//a[contains(text(),'Context Menu')]",
  dragAndDrop: "//a[contains(text(),'Drag and Drop')]",
  dropdown: "//a[contains(text(),'Dropdown')]",
  dynamicControls: "//a[contains(text(),'Dynamic Controls')]",
  dynamicLoading: "//a[contains(text(),'Dynamic Loading')]",
  fileDownload: "//a[contains(text(),'File Download')]",
  fileUpload: "//a[contains(text(),'File Upload')]",
  formAuthentication: "//a[contains(text(),'Form Authentication')]",
  frames: "//a[contains(text(),'Frames')]",
  hovers: "//a[contains(text(),'Hovers')]",
  iframes: "//a[contains(text(),'iFrame')]",
  infiniteScroll: "//a[contains(text(),'Infinite Scroll')]",
  inputs: "//a[contains(text(),'Inputs')]",
  jqueryUiMenus: "//a[contains(text(),'JQuery UI Menus')]",
  jsAlerts: "//a[contains(text(),'JavaScript Alerts')]",
  jsError: "//a[contains(text(),'JavaScript onload event error')]",
  keyPresses: "//a[contains(text(),'Key Presses')]",
  multipleWindows: "//a[contains(text(),'Multiple Windows')]",
  nestedFrames: "//a[contains(text(),'Nested Frames')]",
  notificationMessages: "//a[contains(text(),'Notification Messages')]",
  redirectLink: "//a[contains(text(),'Redirect Link')]",
  secureFileDownload: "//a[contains(text(),'Secure File Download')]",
  slowResources: "//a[contains(text(),'Slow Resources')]",
  sortableDataTables: "//a[contains(text(),'Sortable Data Tables')]",
  statusCodes: "//a[contains(text(),'Status Codes')]",
};
