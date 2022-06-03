import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home page", () => {
  it("renders correctly", () => {
    render(
      <Home
        product={{
          priceId: "fake-price-id",
          amount: "R$100,00",
        }}
      />
    );

    expect(screen.getByText("for R$100,00")).toBeInTheDocument();
  });
});
