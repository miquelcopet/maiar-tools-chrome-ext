import React from "react";
import DefaultLayout from "../../Shared/DefaultLayout/DefaultLayout";
import { Button } from "antd";
import styles from "./MainScreen.styles";
import { useHistory } from "react-router-dom";

export default function MainScreen() {
  const history = useHistory();
  return (
    <DefaultLayout>
      <div style={styles.container}>
        <Button onClick={() => history.push("/boot-withdraw")}>
          Withdraw Bootstrapping
        </Button>
        <Button>Denver Restake Calculator</Button>
      </div>
    </DefaultLayout>
  );
}
