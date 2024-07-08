import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/app/components/header/Index';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('bold Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the Mi negocio link', () => {
    render(<Header />);
    const link = screen.getByText('Mi negocio');
    expect(link).toBeInTheDocument();
  });

  it('renders the Ayuda link', () => {
    render(<Header />);
    const link = screen.getByText('Ayuda');
    expect(link).toBeInTheDocument();
  });

  it('renders the question icon', () => {
    render(<Header />);
    const icon = screen.getByAltText('Icono Info');
    expect(icon).toBeInTheDocument();
  });
});
