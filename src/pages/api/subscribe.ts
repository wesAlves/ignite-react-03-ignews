import { NextApiRequest, NextApiResponse } from "next";
import stripe from "stripe";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    const checkoutSession = await stripe.Checkout.SessionsResource.cre;
  } else {
    response.setHeader("Allow", "POST");
    response.status(405).end("Method not allowed");
  }
};
