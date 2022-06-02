import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { SubscribeButton } from ".";

jest.mock("next-auth/react", () => {
  return {
    useSession() {
      return [[null, false]];
    },
    signIn: jest.fn(),
  };
});

jest.mock("next/router");

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe now!")).toBeInTheDocument();
  });

  it("redirects user to sing in when not authenticated", () => {
    const signInMocked = mocked(signIn);

    render(<SubscribeButton />);

    // const subscribeButton = screen.getByText("Subscribe now!");

    // fireEvent.click(subscribeButton);
    fireEvent(screen.getByText("Subscribe now!"), new MouseEvent("click"));

    expect(signInMocked).toBeCalled;
  });

  it("redirects to posts when user already ha a subscription", () => {
    const useRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);

    const pushMock = jest.fn();

    // useSessionMocked.mockReturnValue({
    //   data: {
    //     user: { name: "Jhon Doe", email: "jhon.doe@example.com" },
    //     expires: "fake-expires",
    //     activeSubscription: "fake-active-subscription",
    //   },
    //   status: "authenticated",
    // });

    // useRouterMocked.mockReturnValue({
    //   push: pushMock,
    // } as any);

    // const subscribeButton = screen.getByText("Subscribe now!");

    render(<SubscribeButton />);

    fireEvent.click(screen.getByText("Subscribe now!"));

    expect(pushMock).toHaveBeenCalled;
  });
});
