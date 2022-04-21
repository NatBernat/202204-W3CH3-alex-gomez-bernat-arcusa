import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When it is instantiated", () => {
    test("Then it should create an object", () => {
      const container = document.createElement("div");

      new Component(container, "p", "");
      const result = container.querySelector("p");

      expect(result).not.toBeNull();
    });
  });
});
