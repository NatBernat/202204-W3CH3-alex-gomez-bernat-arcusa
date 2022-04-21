import FilmCard from "./FilmCard.js";

describe("Given FilmCard component", () => {
  describe("When instantiated", () => {
    let container;
    let singleSeriesCard;
    beforeEach(() => {
      container = document.createElement("div");
      singleSeriesCard = {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        watched: true,
        score: 5,
        emmies: 21,
      };
    });

    test("Then it should create a li element inside the container", () => {
      new FilmCard(container, singleSeriesCard);
      const filmCardTag = container.querySelector("li");

      expect(filmCardTag).not.toBeNull();
    });

    test("Then it should create an object with a h4 tag which contains 'The Sopranos'", () => {
      new FilmCard(container, singleSeriesCard);
      const filmCardTag = container.querySelector("li>h4");

      expect(filmCardTag.textContent).toBe(singleSeriesCard.name);
    });
  });
});
