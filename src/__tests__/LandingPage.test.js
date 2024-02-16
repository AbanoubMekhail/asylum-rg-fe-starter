import React from 'react';
import { render } from '@testing-library/react';
import RenderLandingPage from '../components/pages/Landing/RenderLandingPage';

describe('RenderLandingPage correctly', () => {
  test('renders graphs section correctly', () => {
    const { getByText, getByAltText } = render(<RenderLandingPage />);
    const grantRatesByOfficeImg = getByAltText('Search Grant Rates By Office');
    const grantRatesByNationalityImg = getByAltText(
      'Search Grant Rates By Nationality'
    );
    const grantRatesOverTimeImg = getByAltText('Search Grant Rates Over Time');

    expect(getByText('Search Grant Rates By Office')).toBeInTheDocument();
    expect(getByText('Search Grant Rates By Nationality')).toBeInTheDocument();
    expect(getByText('Search Grant Rates Over Time')).toBeInTheDocument();

    expect(grantRatesByOfficeImg).toBeInTheDocument();
    expect(grantRatesByOfficeImg.src).toContain('bar-graph-no-text.png');

    expect(grantRatesByNationalityImg).toBeInTheDocument();
    expect(grantRatesByNationalityImg.src).toContain('pie-chart-no-text.png');

    expect(grantRatesOverTimeImg).toBeInTheDocument();
    expect(grantRatesOverTimeImg.src).toContain('line-graph-no-text.png');
  });

  test('renders bottom section correctly', () => {
    const { getByText } = render(<RenderLandingPage />);
    expect(getByText('36%')).toBeInTheDocument();
    expect(getByText('5%')).toBeInTheDocument();
    expect(getByText('6x Lower')).toBeInTheDocument();
  });
});
