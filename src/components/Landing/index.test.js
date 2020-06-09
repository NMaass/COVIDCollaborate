import React from "react";
import {render, screen} from "@testing-library/react";
import Landing from "./index"

it('Label changes after input changes', () => {
    render(
        <Landing value = "Test"/>,
    );
    expect(screen.queryByLabelText('Welcome to COVID collaborate Test'))
});
