/* eslint-disable no-unused-vars */
import series from "./series.js";
import Component from "./components/Component/Component.js";
import FilmCard from "./components/FilmCard/FilmCard.js";
import TextContentComponent from "./components/TextContentComponent/TextContentComponent.js";

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
  "You have 2 series pending to watch"
);

const pendingSeriesUl = new TextContentComponent(
  pendingSeriesElement,
  "ul",
  "series-list"
);

const pendingSeriesUlElement = document.querySelector(".series-list");

series.forEach((serie) => {
  if (serie.watched === false) {
    new FilmCard(pendingSeriesUlElement, serie);
  }
});

const watchedSeries = new Component(
  seriesParentElement,
  "section",
  "series-watched"
);
const watchedSeriesElement = document.querySelector(".series-watched");
const watchedSeriesTitle = new TextContentComponent(
  watchedSeriesElement,
  "h3",
  "subsection-title",
  "Watched series"
);

const watchedSeriesParagraph = new TextContentComponent(
  watchedSeriesElement,
  "p",
  "info",
  "You have watched 3 series"
);

const watchedSeriesUl = new TextContentComponent(
  watchedSeriesElement,
  "ul",
  "series-list series-list--watched"
);

const watchedSeriesUlElement = document.querySelector(".series-list--watched");

series.forEach((serie) => {
  if (serie.watched) {
    new FilmCard(watchedSeriesUlElement, serie);
  }
});
