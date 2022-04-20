import Component from "./Component.js";

class TextContentComponent extends Component {
  constructor(parentElement, tag, className, text) {
    super(parentElement, tag, className);

    this.element.textContent = text;
  }
}

export default TextContentComponent;
