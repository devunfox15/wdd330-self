import { findProductById } from "./productData.mjs";
import { getLocalStorage,setLocalStorage, loadHeaderFooter } from "./utils.mjs";

let currentProduct = {};

loadHeaderFooter("../partials/productHeader.html", "../partials/footer.html");

function renderProductDetails() {
  // changed this function to use more query selectors for muiltiple pages
  document.querySelector("#productName").innerText = currentProduct.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
  currentProduct.NameWithoutBrand;
  document.querySelector("#productImage").src = currentProduct.Images.PrimaryLarge;
  document.querySelector("#productImage").alt = currentProduct.Name;
  document.querySelector("#productFinalPrice").innerText = currentProduct.FinalPrice;
  document.querySelector("#productColorName").innerText =
  currentProduct.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
  currentProduct.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = currentProduct.Id;
}


export default async function productDetails(productId) {
  // Find product by id
  currentProduct = await findProductById(productId);

  renderProductDetails();
  
  document.getElementById("addToCart").addEventListener("click", addToCart);
  
}

function addToCart() {
  let cartContents = getLocalStorage("so-cart");

  if (!cartContents) {
    cartContents = [];
  }
  cartContents.push(currentProduct);
  setLocalStorage("so-cart", cartContents);
}



