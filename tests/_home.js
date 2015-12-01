import { expect } from 'chai';
import Home from '../app/home.jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

var home = new Home();

var shallowRenderer = TestUtils.createRenderer();

shallowRenderer.render(<Home />);

 describe("TestClass must", function() {

     it("add two numbers!", function() {

        expect(home.add(2, 3)).to.equal(5);
     });

     it("add two numbers correctly!", () => {

        expect(home.add(3, 3)).not.to.equal(5);
     });
 });

describe("Home component must", function() {

    it("has a \"Hello world!\" header!", () => {

        expect(shallowRenderer.getRenderOutput().type).to.equal('h1');
        expect(shallowRenderer.getRenderOutput().props.children).to.equal('Hello world!');
    });
});
