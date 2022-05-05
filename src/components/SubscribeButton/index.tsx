import { signIn, signOut, useSession } from "next-auth/react";

import styles from "./styles.module.scss";

export function SubscribeButton() {
  const { data } = useSession();

  function handleSubscribe() {
    if (!data) {
      signIn("github");
      return;
    }
  }

  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now!
    </button>
  );
}
