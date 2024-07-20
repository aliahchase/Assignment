

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginButton from '../components/loginbutton';
import { signIn } from 'next-auth/react'; // Import signIn directly for mocking

jest.mock('next-auth/react', () => ({
  useSession: () => ({ data: null }), // Mock session (optional)
  signIn: jest.fn(), // Mock signIn function
}));

test('should render LoginButton with Google logo and text', () => {
  render(<LoginButton />);

  // Check for Google logo image
  const logo = screen.getByRole('img', { name: /Google Logo/i });
  expect(logo).toBeInTheDocument();

  // Check for button text
  const buttonText = screen.getByText(/Continue with Google/i);
  expect(buttonText).toBeInTheDocument();
});

test('should call signIn function when button is clicked', async () => {
  render(<LoginButton />);

  const button = screen.getByRole('button', { name: /Continue with Google/i });
  fireEvent.click(button);

  // Check that signIn function was called
  expect(signIn).toHaveBeenCalledWith('google', {
    callbackUrl: '/list',
  });
});

test('should log error when sign-in fails', async () => {
  const mockError = new Error('Mock sign-in error');
  (signIn as jest.Mock).mockRejectedValueOnce(mockError); // Mock signIn to reject with an error

  // Spy on console.error
  const consoleErrorSpy = jest.spyOn(console, 'error');
  consoleErrorSpy.mockImplementation(() => {}); // Mock console.error to prevent actual output

  render(<LoginButton />);

  const button = screen.getByRole('button', { name: /Continue with Google/i });
  fireEvent.click(button);

  // Wait for the asynchronous operation (error logging)
  await new Promise(resolve => setTimeout(resolve, 0));

  // Ensure that the error message is logged
  expect(consoleErrorSpy).toHaveBeenCalledWith('Sign in error:', mockError);

  // Restore mock
  consoleErrorSpy.mockRestore();
});