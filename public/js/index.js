/* eslint-disable no-unused-vars */
import series from "./series.js";
import Component from "./components/Component.js";

const parentElement = document.querySelector(".series");
const pendingSeries = new Component(parentElement, "section", "series-pending");
