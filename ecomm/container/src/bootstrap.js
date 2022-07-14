import { mount } from "products/ProductsIndex";
import { cartMount } from "cart/CartShow";
const el = document.querySelector("#my-products");
const cartEl = document.querySelector("#my-cart");
mount(el);
cartMount(cartEl);
