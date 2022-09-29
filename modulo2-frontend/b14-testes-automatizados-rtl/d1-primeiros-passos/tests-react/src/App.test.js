import { render, screen } from '@testing-library/react';
import App from './App';

function numeroAleatorio() {
  return Math.floor(Math.random() * 100)
}

function divisivelPorDois() {
  return numeroAleatorio() % 2 === 0
}
 
test('Verifica se a função foi chamada', () => {
  numeroAleatorio = jest.fn();
  numeroAleatorio()

  expect(numeroAleatorio).toHaveBeenCalled();
})

test("#divisivelPorDois", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0);

  expect(divisivelPorDois()).toBe("first call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(1);

  expect(divisivelPorDois()).toBe("second call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(2);

  expect(divisivelPorDois()).toBe("default value");
  expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});