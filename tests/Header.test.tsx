import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/header'; 

// Mock SessionProvider and useSession hook
jest.mock('../components/SessionWrapper', () => ({
  __esModule: true,
  default: ({ children }) => children, // Pass children through directly
}));

jest.mock('next-auth/react', () => ({
  useSession: () => ({ data: { user: { name: 'John Doe' } } }), // Mock session data
}));

test('should render header with logo, logout button, and language indicator (logged-in user)', () => {
  render(<Header />);

  // Check for logo image
  const logo = screen.getByRole('img', { name: /Company Logo/i });
  expect(logo).toBeInTheDocument();

  // Check for logout button
  const logoutButton = screen.getByText(/Sign Out/i);
  expect(logoutButton).toBeInTheDocument();

  // Check for language indicator text
  const languageText = screen.getByText(/EN/i);
  expect(languageText).toBeInTheDocument();
});
