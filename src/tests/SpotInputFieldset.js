import React from 'react';
import SpotInputFieldset from '../Components/CreatePartyForm/SpotInput/SpotInputFieldset';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

describe('SpotInputFieldset component', () => {

  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <SpotInputFieldset />
      </MemoryRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})