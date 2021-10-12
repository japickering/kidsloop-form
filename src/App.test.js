import { render } from "@testing-library/react";
import App from "./App";
import { login } from "./libs";

// run mocks
// login("tester@ui.dev", "test123");

test("renders app", () => {
  render(<App />);
});

test("the fetch fails with an error", () => {
  expect.assertions(1);
  return login("tester@ui.dev", "test123").catch((e) =>
    expect(e).toBeDefined()
  );
});
