const text = "Hola mundo";
const fruits = ["manzana", "melon", "banana"];

test("Debe contener un texto", () => {
  expect(text).toMatch(/mundo/);
});

test("Tenemos una banana", () => {
  expect(fruits).toContain("banana");
});

test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

test("Verdadero", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(
    str
      .split("")
      .reverse()
      .join("")
  );
};

test("Probar un callback", () => {
  reverseString("Hola", str => {
    expect(str).toBe("aloH");
  });
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(
      str
        .split("")
        .reverse()
        .join("")
    );
  });
};

test("Probar una promesa", () => {
  return reverseString2("Anita").then(string => {
    expect(string).toBe("atinA");
  });
});

test("Probar async/await", async () => {
  const string = await reverseString2("Hola");
  expect(string).toBe("aloH");
});

//funcion que me sirve correr codigo antes de cada prueba
afterEach(() => console.log("Despues de cada prueba"));
afterAll(() => console.log("Despues de todas las pruebas"));

beforeEach(() => console.log("Antes de tdoas las pruebas"));
beforeAll(() => console.log("Antes de todas las pruebas"));
