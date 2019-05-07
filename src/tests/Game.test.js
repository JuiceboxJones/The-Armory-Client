import React from 'react';
import Game from '../Components/Game';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from "react-test-renderer";
import { render } from 'react-testing-library';

describe('Game component', () => {

  it.only('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

  it.skip("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Game />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})