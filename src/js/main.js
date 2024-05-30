import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter("../partials/header.html", "../partials/footer.html");

productList(".product-list", "tents");

