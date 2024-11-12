// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pageobjects/home');
const { ProductsPage } = require('../pageobjects/products');

var homePage
var productsPage
var products = ["Desktop", "Phone", "Tablet"]

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page)
  productsPage = new ProductsPage(page)
  await homePage.goto()
  await homePage.gotoContactPage()
});

test('add a product to the cart', async ( { page } ) => {
  await homePage.goto();

  await homePage.gotoProductsPage();

  const randomProduct = Math.floor(Math.random() * products.length);
  await productsPage.addProductToCart(products[randomProduct]);

  await productsPage.clickIt();
  
  await page.waitForTimeout(3000);
  
  // Expect a title "to contain" a substring.
  await expect(productsPage.cartCount).toContainText("1");
});

test('add multiple products to the cart', async ({ page } ) => {
  await homePage.goto();

  await homePage.gotoProductsPage();

  for (var i = 0; i < products.length; i++) {
    await productsPage.addProductToCart(products[i]);
  }

  await page.waitForTimeout(3000);
  
  // Expect a title "to contain" a substring.
  await expect(productsPage.cartCount).toContainText("3");
});