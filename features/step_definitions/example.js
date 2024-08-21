const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let num1, num2, resultado;

Given('que tengo los números {int} y {int}', function (int1, int2) {
  num1 = int1;
  num2 = int2;
});

When('los sumo', function () {
  resultado = num1 + num2;
});

Then('el resultado debería ser {int}', function (expected) {
  assert.strictEqual(resultado, expected);
});
