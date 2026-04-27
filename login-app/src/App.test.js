import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o App sem erro', () => {
  render(<App />);
});

test('existe um elemento na tela', () => {
  render(<App />);
  const element = screen.getByText(/login/i);
  expect(element).toBeInTheDocument();
});

test('App é uma função', () => {
  expect(typeof App).toBe('function');
});

test('renderiza múltiplas vezes', () => {
  render(<App />);
  render(<App />);
});

test('não quebra ao renderizar', () => {
  expect(() => render(<App />)).not.toThrow();
});