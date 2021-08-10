import React from 'react';
import SearchList from './SearchList';
import { screen, cleanup, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import axios from 'axios';
import { matchMedia } from 'helpers/matchMediaTesting';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SearchList component', () => {
  beforeEach(async () => {
    matchMedia();
    const playerdData = [
      {
        name: 'Egor Kliuka',
        nationality: 'Russia'
      }
    ];
    const mockSelectedPlayerAction = jest.fn();
    mockedAxios.get.mockResolvedValueOnce(playerdData);
    await waitFor(() =>
      renderWithThemeProvider(<SearchList data={playerdData} selectedPlayerAction={mockSelectedPlayerAction} />)
    );
  });

  afterEach(cleanup);

  it('renders the table and its pagination', () => {
    expect(screen.getByText(/Name/)).toBeInTheDocument();
    expect(screen.getByText(/Nationality/)).toBeInTheDocument();
    expect(screen.getAllByText(/1/)[0]).toBeInTheDocument();
  });

  it('renders the table with fetched data', async () => {
    await waitFor(() => expect(screen.getByText('Egor Kliuka')).toBeInTheDocument());
  });
});
