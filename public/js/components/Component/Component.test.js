import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When instantiated", () => {
    let container;
    beforeEach(() => {
      container = document.createElement("div");
    });
    test("Then it should create a p tag inside the div container", () => {
      new Component(container, "p", "");
      const resultTag = container.querySelector("p");

      expect(resultTag).not.toBeNull();
    });

    test("Then it should create a p tag with 'paragraph className", () => {
      new Component(container, "p", "paragraph");
      const resultClass = container.querySelector(".paragraph");

      expect(resultClass).not.toBeNull();
    });
  });
});
