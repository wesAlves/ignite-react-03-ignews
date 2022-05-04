import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51Kve34C78cDG1tkHJfZLtnsfOxbxmYDi8hrDqldYqlHF8S6IJ0tYWfaVi3zQJo3NagzRmoPSGxx3ZqrvteuAJHkl00yQ2vH7MT",
  {
    apiVersion: "2020-08-27",
    appInfo: {
      name: "ignews",
      version: "0.1.0",
    },
  }
);
