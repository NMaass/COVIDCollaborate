import React from "react";
import SignIn from "../SignIn";
import ReactTestRenderer from 'react-test-renderer';
import  render from 'react-test-renderer';
import renderer from 'react-test-renderer';
import {fireEvent, createEvent} from "@testing-library/react";
import SignInPage from "../SignIn";
import {waitForElement} from "@testing-library/dom";
import Button from "@material-ui/core/Button";
import {createRenderer} from "react-dom/test-utils";
import {throwError} from "rxjs";




describe("<SignIn />", () => {
    test("should display a blank sign in form", async () => {
    });
});

describe("<Button />", () => {
    test("should click button", async () => {
    });
});


describe("Button component", () => {
    test("Matches the snapshot", () => {
        const button =renderer.create(<input/>);
        expect(button.toJSON()).toMatchSnapshot();
    });
});

describe('SignIn modification', () => {
    let SignIn = false

    const variables = {
        input: {
            email: 'test@gmail.com',
            password: '123456',
        },
    }
    const result = () => {
        SignIn = true
        return {
            data: {
                Login: {
                    accountId: '12345',
                },
            },
        }
    }
    const mocks = [
        {
            request: {
                query: SignIn,
                variables,
            },
            result,
        },
    ]
    it('should call the Sign in modification', async () => {
        await (async () => {
            const {findByTestId} = render(
                <MockProvider mocks={mocks} addTypename={false}>
                    <SignIn/>
                </MockProvider>,
            )
            fireEvent.change(await findByTestId('gmail'), {
                target: {
                    value: 'test@gmail.com',
                },
            })
            fireEvent.change(await findByTestId('password'), {
                target: {
                    value: '123456',
                },
            })
            await (async () =>
                    fireEvent.click(await findByTestId('submit'))
            )
        })
        expect(SignIn).toBe(false)
    });
});

test("Testing", () => {
    const t = () => {
        throw new TypeError();
    };
    expect(t).toThrow(TypeError);
});

