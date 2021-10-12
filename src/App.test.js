import { render } from "@testing-library/react";
import App from "./App";
import { testLogin } from "./libs";

test("renders app", () => {
	render(<App />);
});

test("testLogin fetch fails with an error", async () => {
	expect.assertions(1);
	try {
		await testLogin("tester@ui.dev", "test123");
	} catch (e) {
		expect(e).toMatch("error");
	}
});
