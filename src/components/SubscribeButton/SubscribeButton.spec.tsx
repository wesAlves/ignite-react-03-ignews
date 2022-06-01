import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { useSession } from "next-auth/react";
import { SubscribeButton } from ".";

jest.mock("next-auth/react", () => {
  return {
    useSession() {
      return [[null, false]];
    },
  };
});

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  //   it("renders correctly when user is authenticated", () => {
  //     const useSessionMocked = mocked(useSession);

  //     useSessionMocked.mockReturnValue({
  //       data: {
  //         user: { name: "Jhon Doe", email: "jhon.doe@example.com" },
  //         expires: "fake-expires",
  //       },
  //       status: "authenticated",
  //     });

  //     render(<SubscribeButton />);

  //     expect(screen.getByText("Jhon Doe")).toBeInTheDocument();
  //   });
});
