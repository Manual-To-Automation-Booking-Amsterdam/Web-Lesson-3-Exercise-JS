// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pageobjects/home');
const { LoginPage } = require('../pageobjects/login');
var homePage
var loginPage

var username = "student";
var wrongUsername = "wrongStudent";
var password = "Password123";
var wrongPassword = "Password321";
var wrongUsernameText = "Incorrect username!";
var wrongPasswordText = "Incorrect password!";
var wrongUsernameAndPasswordText = "Incorrect username and password!";
var url = 'http://browserstacktraining.site'

test.beforeEach(async ({ page }) => {
  await page.goto(url);
  await expect(page.url).toContain(url)
  await page.locator("#loginButton").click();
  homePage = new HomePage(page)
  loginPage = new LoginPage(page)
});

test('wrong username', async ({ page }) => {
  await loginPage.fillLoginForm(wrongUsername, password)

  // Expect a title "to contain" a substring.
  await expect(loginPage.loginMessage).toHaveText(wrongUsernameText);
});

test('wrong password', async ({ page }) => {
  await loginPage.fillLoginForm(username, wrongPassword)

  // Expect a title "to contain" a substring.
  await expect(loginPage.loginMessage).toHaveText(wrongPasswordText);
});

test('wrong username and password', async ({ page }) => {
  await loginPage.fillLoginForm(wrongUsername, wrongPassword)

  // Expect a title "to contain" a substring.
  await expect(loginPage.loginMessage).toHaveText(wrongUsernameAndPasswordText);
});