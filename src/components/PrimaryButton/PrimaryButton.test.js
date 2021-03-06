import "@testing-library/jest-dom";

import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";

test("Clicking a button should trigger the function passed in onClick prop", () => {
  let buttonWasClicked = false;
  render(
    <PrimaryButton
      title="Button title"
      onClick={() => (buttonWasClicked = true)}
    />
  );
  fireEvent.click(screen.queryByText("Button title"));
  expect(buttonWasClicked).toBeTruthy();
});

test("Clicking a disabled button shouldn't trigger the function passed in onClick prop", () => {
  let buttonWasClicked = false;
  render(
    <PrimaryButton
      title="Button title"
      disabled={true}
      onClick={() => (buttonWasClicked = true)}
    />
  );
  fireEvent.click(screen.queryByText("Button title"));
  expect(buttonWasClicked).toBeFalsy();
});
