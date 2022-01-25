import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input do tipo email', () => {
  render(<App />)
  const inputElement = screen.getByLabelText("email");

  expect(inputElement.type).toBe("email")
  expect(inputElement).toBeInTheDocument();
})