import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  it("shold render a heading", () => {
    render(<Header />);

    expect(screen.getAllByRole("heading", { name: "MultiStep Form" }));
  });
});
