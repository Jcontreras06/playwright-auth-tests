import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { SecureAreaPage } from "../pages/SecureAreaPage";
import { users } from "../fixtures/testData";

test.describe("Login functionality", () => {
  test("should login successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const secureAreaPage = new SecureAreaPage(page);

    // Navigate to login page
    await loginPage.goto();

    // Perform login using valid credentials
    await loginPage.login(users.validUser.username, users.validUser.password);

    // Verify successful authentication and redirect
    await expect(page).toHaveURL(/secure/);

    await expect(secureAreaPage.successMessage).toContainText(
      "You logged into a secure area!",
    );

    // Verify logout option is available after login
    await expect(secureAreaPage.logoutButton).toBeVisible();
  });

  test("should display error message if username is invalid", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.goto();

    // Attempt login with invalid username
    await loginPage.login(
      users.invalidUsername.username,
      users.invalidUsername.password,
    );

    // Verify authentication failed and user remains on login page
    await expect(page).toHaveURL(/login/);
    await expect(page).not.toHaveURL(/secure/);

    await expect(loginPage.flashMessage).toContainText(
      "Your username is invalid",
    );
  });

  test("should display error message if password is invalid", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.goto();

    // Attempt login with invalid password
    await loginPage.login(
      users.invalidPassword.username,
      users.invalidPassword.password,
    );

    // Verify authentication failed and user remains on login page
    await expect(page).toHaveURL(/login/);
    await expect(page).not.toHaveURL(/secure/);

    await expect(loginPage.flashMessage).toContainText(
      "Your password is invalid",
    );
  });
});
