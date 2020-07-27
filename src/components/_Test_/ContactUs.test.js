import ContactUs from "../ContactUs";
import React from "react";
import ReactDOM from 'react-dom';
import ContactUsForm from "../ContactUs/ContactUs";
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('Checking to Attempt to render the document without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContactUs />, div);
});

test ("first Snaptest test",()=> {
    const component=renderer.create(<
        ContactUs/>
    );
    let tree= component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('null', () => {
    let n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

describe('ClassName to be', () => {
    it('Chips', () => {
        expect(true).toEqual(true);
    });
});

test('check to see if there is no S in phone', () => {
    expect('phone').not.toMatch(/s/);
});

test('Check to see if the word contain a S', () => {
    expect('Messag').toMatch(/s/);
});


describe('Button', () => {
    it('should render without throwing an error ', () => {
        const component = renderer.create(<Button action={''} path={'Cancel'} />);
        expect(
            shallow(<Button action={''} path={'Cancel'} />)
                .find('div.container')
                .exists()
        ).toBe(true);
    });
});