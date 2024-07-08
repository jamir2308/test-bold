
import React from 'react';
import { render, screen } from '@testing-library/react';
import SalesCard from '@/app/dashboard/components/sales-card/Index';
import { monthNames } from '@/app/utils/constants';

jest.mock('@/app/utils/constants', () => ({
  ...jest.requireActual('@/app/utils/constants'),
  getWeekRange: jest.fn().mockReturnValue('7 Julio al 13 Julio'),
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
}));

describe('SalesCard', () => {
  it('renders the title', () => {
    render(<SalesCard title="Ventas de Hoy" amount="$123.45" filter="Hoy" />);
    const titleElement = screen.getByText('Ventas de Hoy');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the amount with gradient text', () => {
    render(<SalesCard title="Ventas de Hoy" amount="$123.45" filter="Hoy" />);
    const amountElement = screen.getByText('$123.45');
    expect(amountElement).toBeInTheDocument();
    expect(amountElement).toHaveStyle('background: linear-gradient');
  });

  it('renders the correct date for "Hoy" filter', () => {
    const todayDate = `${new Date().getDate()} de ${monthNames[new Date().getMonth()]} ${new Date().getFullYear()}`;
    render(<SalesCard title="Ventas de Hoy" amount="$123.45" filter="Hoy" />);
    const dateElement = screen.getByText(todayDate);
    expect(dateElement).toBeInTheDocument();
  });

  it('renders the correct date for "Esta Semana" filter', () => {
    render(<SalesCard title="Ventas de Esta Semana" amount="$123.45" filter="Esta Semana" />);
    const dateElement = screen.getByText('7 Julio al 13 Julio');
    expect(dateElement).toBeInTheDocument();
  });

  it('renders the correct date for "Julio" filter', () => {
    render(<SalesCard title="Ventas de Julio" amount="$123.45" filter="Julio" />);
    const dateElement = screen.getByText('Julio ,2024');
    expect(dateElement).toBeInTheDocument();
  });

  it('renders the info icon with tooltip', () => {
    render(<SalesCard title="Ventas de Hoy" amount="$123.45" filter="Hoy" />);
    const infoIcon = screen.getByAltText('Icono Info');
    expect(infoIcon).toBeInTheDocument();
    expect(infoIcon).toHaveAttribute('src', '/info-circle.svg');
  });
});
