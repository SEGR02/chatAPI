const { checkInteger, sum } = require("./math");
// * la funcion test recibe dos parametros que nos indica de que va la prueba de que traata
// * funcion de callback que ayudara a ejecutar la funcion

// ? una funcion con un bool null no debe pasar!
describe("Probando si es entero", () => {
  test("Debe devolver un true cuando le pasemos el valor de 5", () => {
    // arrange
    const value = 5;
    // ACT => necesita la function
    const result = checkInteger(value);
    //assert
    expect(result).toBe(true);
  });

  test("Debe devolver un true cuando le pasamos un numero 100", () => {
    //arrange
    const value = 100;
    //act
    const result = checkInteger(value);
    //assert
    expect(result).toBe(true);
  });

  test("Debe devolver un true cuando le pasamos un numero -3", () => {
    //arrange
    const value = -3;
    //act
    const result = checkInteger(value);
    //assert
    expect(result).toBe(true);
  });

  test("Debe devolver un false cuando le pasamos un numero 5/3", () => {
    //arrange
    const value = 5 / 3;
    //act
    const result = checkInteger(value);
    //assert
    expect(result).toBe(false);
  });

  test("Debe devolver un false cuando le pasamos un 'javascript'", () => {
    //arrange
    const value = "javascript";
    //act
    const result = checkInteger(value);
    //assert
    expect(result).toBe(false);
  });
});

// ! otras validaciones

describe("Probando sum", () => {
  test("Debe devolver la suma de 5 + 5", () => {
    //arrange
    const num1 = 5;
    const num2 = 5;
    //act
    const result = sum(num1, num2);
    //assert
    expect(result).toBe(num1 + num2);
  });

  test("Debe devolver la suma de 3/5 + 9", () => {
    //arrange
    const num1 = 3 / 5;
    const num2 = 9;
    //act
    const result = sum(num1, num2);
    //assert
    expect(result).toBe(num1 + num2);
  });

  test("Debe devolver false la suma de 4 + {}", () => {
    //arrange
    const num1 = 4;
    const num2 = {};
    //act
    const result = sum(num1, num2);
    //assert
    expect(result).toBe(NaN);
  });

  test("Debe devolver false la suma de NaN + []", () => {
    //arrange
    const num1 = NaN;
    const num2 = [];
    //act
    const result = sum(num1, num2);
    //assert
    expect(result).toBe(NaN);
  });

  test("Debe devolver 0.3 la suma de 0.1 + 0.2", () => {
    //arrange
    const num1 = 0.2;
    const num2 = 0.1;
    //act
    const result = sum(num1, num2);
    //assert
    expect(result).toBeCloseTo(0.3);
  });
});
