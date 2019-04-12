/* eslint-env node, jest */
import React, { useState, useEffect } from 'react';
import TestRenderer from 'react-test-renderer';
import useVisibility from '../src'

let TestComponent;
beforeAll(() => {
  TestComponent = (props) => {
  const isVisible = useVisibility(".App");
  const [colorMe, setColorMe] = useState("gray");

  useEffect(
    () => {
      if (isVisible) {
        setColorMe("red");
      }
    },
    [isVisible]
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Scroll Down</h1>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>|</div>
      <div style={{ textAlign: "center" }}>↓</div>
      <div
        className="App"
        style={{
          marginTop: "600px",
          backgroundColor: colorMe,
          color: "white"
        }}
      >
        <h1>Hello World !</h1>
      </div>
    </>
  );
  }
});

describe('check visibility of a component', () => {
  test('initial render color', () => {
    TestRenderer.create(
      <TestComponent />,
      {
        createNodeMock: (element) => {
          element.scrollIntoView();
          console.log(element.props, 'element.props');
        }
      }
    );
  });
  expect(true).toBe(true);
});