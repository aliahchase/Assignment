import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/footer'; // Adjust the path if necessary

describe('Footer component', () => {
  it('should render the copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2024 Your Company\. All rights reserved\./i); // Use case-insensitive matching
    expect(copyrightText).toBeInTheDocument();
  });

  it('should have a lightgrey background color', () => {
    render(<Footer />); // Ensure <Footer /> is rendered
    const footer = screen.getByRole('footer'); // Verify element selection
    expect(footer).toHaveStyle({ backgroundColor: 'lightgrey' });
  });

  it('should have a padding of 1rem', () => {
    render(<Footer />);
    const footer = screen.getByRole('footer');
    expect(footer).toHaveStyle({ padding: '1rem' });
  });
});