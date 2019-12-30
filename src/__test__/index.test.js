const randomStrings = require("../index");

describe("Probar funcionalidades de nuestra funcion randomStrings", () => {
  test("Probar funcionalidad", () => {
    expect(typeof randomStrings()).toBe("string");
  });

  test("Comprobar que no existe una ciudad", () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  });
});
