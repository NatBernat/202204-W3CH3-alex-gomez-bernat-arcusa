import TextContentComponent from "./TextContentComponent.js";

describe("Given a TextContentComponent Component", () => {
  describe("When instantiated", () => {
    test("Then it should create a p component under a 'div' element", () => {
      const container = document.createElement("div");

      new TextContentComponent(container, "p");
      const resultTag = container.querySelector("p");

      expect(resultTag).not.toBeNull();
    });
  });

  describe("When instantiated", () => {
    test("Then should cereate a p component under a 'div' element with 'Hello paragraph' text", () => {
      const container = document.createElement("div");
      new TextContentComponent(container, "p", "", "Hello paragraph");
      const expectedText = "Hello paragraph";
      const paragraph = container.querySelector("p");

      expect(expectedText).toBe(paragraph.textContent);
    });
  });
});
