import { render, screen } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

test("active link renders correctly", () => {
  render(
    <ActiveLink activeClassName="active" href={"/"}>
      <a>Home</a>
    </ActiveLink>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
});
