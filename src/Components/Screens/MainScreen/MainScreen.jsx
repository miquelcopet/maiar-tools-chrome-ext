import React from "react";
import DefaultLayout from "../../Shared/DefaultLayout/DefaultLayout";
import { Button } from "antd";
import styles from "./MainScreen.styles";

export default function MainScreen() {
  return (
    <DefaultLayout>
      <div style={styles.container}>
        <Button>Withdraw Bootstrapping</Button>
        <Button>Denver Restake Calculator</Button>
      </div>
    </DefaultLayout>
  );
}
