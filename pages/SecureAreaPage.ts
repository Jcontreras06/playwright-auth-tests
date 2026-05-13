import { Locator, Page } from "@playwright/test";

// Page Object Model for secure area validations
export class SecureAreaPage {
  readonly page: Page;
  readonly successMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.successMessage = page.locator("#flash");
    this.logoutButton = page.locator(".button.secondary.radius");
  }
}
