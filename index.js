const { name, height, message } = require("../index.js");
describe("Name", () => {
    if('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });
  describe("Height", () => {
    if("is less than 40", () => {
      expect(height).toBeLessThan(40);
    });
  });
  describe("Message", () => {
    if("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
