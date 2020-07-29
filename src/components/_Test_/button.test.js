import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../AboutTest/button';

import {render, cleanup} from '@testing-library/react';
import"jest-dom/extend-expect";
import {getByTestId} from "@testing-library/dom";

afterEach(cleanup);

it (" renders without crashing", () => {

    const div = document.createElement ("div");
    ReactDOM.render(<Button />, div);

});

it ("renders button correctly", () => {
    const { getByTestId} = render(<Button label="contact us"/>)
    expect(getByTestId("button")).toHaveTextContent ('Contact Us')

});

it ("renders button correctly", () => {
    const { getByTestId} = render(<Button label="Contact Us For More Information"/>)
    expect(getByTestId("button")).toHaveTextContent ("Contact Us For More Information")

});

it ("matches snapshot",() => {
    const tree = render.create(<Button label="save"/>).toJSON();
    expect(tree).toMatchSnapshot();
});