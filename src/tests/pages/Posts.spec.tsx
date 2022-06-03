import { render, screen } from "@testing-library/react";
import { stripe } from "../../services/stripe";
import Posts from "../../pages/posts";
import { mocked } from "jest-mock";

jest.mock("next/router");
jest.mock("next-auth/react", () => {
  return {
    useSession: () => [null, false],
  };
});

jest.mock("../../services/stripe");

const posts = [
  {
    slug: "my-new-post",
    title: "My new post",
    excerpt: "Post excerpt",
    updatedAt: "4 June",
  },
];

describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("My new post")).toBeInTheDocument();
  });

  //   it("loads initial data", async () => {
  //     const retriveStripePricesMocked = mocked(stripe.prices.retrieve);

  //     retriveStripePricesMocked.mockResolvedValueOnce({
  //       id: "fake-id",
  //       unit_amount: 1000,
  //     } as any);

  //     const response = await getStaticProps({});

  //     expect(response).toEqual(
  //       expect.objectContaining({
  //         props: {
  //           product: {
  //             priceId: "fake-id",
  //             amount: "$10.00",
  //           },
  //         },
  //       })
  //     );
  //   });
});
