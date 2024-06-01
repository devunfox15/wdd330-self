import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter("../partials/header.html", "../partials/footer.html");

productList(".product-list", "tents");

productList(".product-list", "backpacks");

productList(".product-list", "sleeping-bags");

productList(".product-list", "hammocks");