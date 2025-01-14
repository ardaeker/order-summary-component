import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { Checkout } from './checkout';

test('renders the checkout component with correct structure', () => {
  render(<Checkout />);

  expect(screen.getByAltText('')).toHaveAttribute(
    'src',
    '/illustration-hero.svg',
  );

  expect(
    screen.getByRole('heading', { name: /order summary/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByText(/you can now listen to millions of songs/i),
  ).toBeInTheDocument();

  expect(screen.getByText(/annual plan/i)).toBeInTheDocument();
  expect(screen.getByText(/\$59\.99\/year/i)).toBeInTheDocument();

  expect(screen.getByRole('link', { name: /change/i })).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /proceed to payment/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /cancel order/i }),
  ).toBeInTheDocument();
});
