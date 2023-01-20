import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Given an App component", () => {
  it("should render a heading and the main form", async () => {
    render(<App />);

    const title = await screen.getByRole("heading", { level: 1 });

    expect(title).toBeInTheDocument();
  });
});
