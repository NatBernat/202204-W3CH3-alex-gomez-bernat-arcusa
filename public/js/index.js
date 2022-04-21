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
  "You have 2 series pending to watch"
);

const pendingSeriesUl = new TextContentComponent(
  pendingSeriesElement,
  "ul",
  "series-list"
);

const pendingSeriesUlElement = document.querySelector(".series-list");

let newFilm = -1;
series.forEach((serie) => {
  if (serie.watched === false) {
    newFilm = new FilmCard(pendingSeriesUlElement, serie);
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
let newFilmWatched = -1;

series.forEach((serie) => {
  if (serie.watched) {
    newFilmWatched = new FilmCard(watchedSeriesUlElement, serie);
  }
});
