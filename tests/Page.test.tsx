import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from '@/app/page'; 
import React from "react";
import { signIn } from 'next-auth/react';

// Mocking next-auth/react session
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({ data: null, status: 'loading' })),
  signIn: jest.fn(),
}));

describe('Home Component', () => {
  it('renders correctly with LoginButton', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Welcome to Customer Portal')).toBeInTheDocument();
    expect(getByText('Please login to continue')).toBeInTheDocument();
    expect(getByText('Continue with Google')).toBeInTheDocument();
  });

  it('handles Google sign in click', async () => {
    const { getByText } = render(<Home />);

    // Mock the signIn function to simulate successful sign-in
    signIn.mockResolvedValueOnce({
        error: null,
        url: '/list', // Mocking the callback URL after successful sign-in
      });
      
    // Simulate a click on the Google sign-in button
    fireEvent.click(getByText('Continue with Google'));

    await waitFor(() => {
      // Assert that after sign-in, it redirects to '/list'
      expect(signIn).toHaveBeenCalledWith('google', {
        callbackUrl:'/list',
      })
    });
  });
});
