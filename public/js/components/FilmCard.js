import Component from "./Component.js";

class FilmCard extends Component {
  constructor(parentElement) {
    super(parentElement, "li", "serie");
    this.render();
  }

  render() {
    this.element.innerHTML = `<li class="serie">
                <img
                  class="serie__poster"
                  src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                  alt="The Sopranos poster"
                />
                <h4 class="serie__title">The Sopranos</h4>
                <p class="serie__info">David Chase (1999)</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>`;
  }
}

export default FilmCard;
