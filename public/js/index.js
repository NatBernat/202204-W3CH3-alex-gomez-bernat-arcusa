/* eslint-disable no-unused-vars */
import series from "./series.js";
import Component from "./components/Component.js";
import TextContentComponent from "./components/TextContentComponent.js";
import FilmCard from "./components/FilmCard.js";

const seriesParentElement = document.querySelector(".series");

const pendingSeries = new Component(
  seriesParentElement,
  "section",
  "series-pending"
);
const pendingSeriesElement = document.querySelector(".series-pending");
const pendingSeriesTitle = new TextContentComponent(
  pendingSeriesElement,
  "h3",
  "subsection-title",
  "Pending series"
);

const pendingSeriesParagraph = new TextContentComponent(
  pendingSeriesElement,
  "p",
  "info",
  "You have watched 4 series"
);

const pendingSeriesLi = new TextContentComponent(
  pendingSeriesElement,
  "ul",
  "series-list"
);

const pendingSeriesUl = document.querySelector(".series-list");

series.forEach((serie) => {
  const newFilm = new FilmCard(pendingSeriesUl);
});
