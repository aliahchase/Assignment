import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LogoutButton from '../components/logoutbutton';
import { useSession, signOut } from 'next-auth/react';

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signOut: jest.fn(),
}));

describe('LogoutButton component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render Sign Out button when user is signed in', () => {
    // Mock a signed-in session
    (useSession as jest.Mock).mockReturnValueOnce({ data: { user: { name: 'Test User' } } });

    render(<LogoutButton />);

    const button = screen.getByRole('button', { name: /Sign Out/i });
    expect(button).toBeInTheDocument();
  });

  test('should not render Sign Out button when user is not signed in', () => {
    // Mock no session (user not signed in)
    (useSession as jest.Mock).mockReturnValueOnce({ data: null });

    render(<LogoutButton />);

    const button = screen.queryByRole('button', { name: /Sign Out/i });
    expect(button).toBeNull();
  });

  test('should call signOut function when Sign Out button is clicked', () => {
    // Mock a signed-in session
    (useSession as jest.Mock).mockReturnValueOnce({ data: { user: { name: 'Test User' } } });

    render(<LogoutButton />);

    const button = screen.getByRole('button', { name: /Sign Out/i });
    fireEvent.click(button);

    expect(signOut).toHaveBeenCalledWith({ callbackUrl: 'http://localhost:3000' });
  });
});
