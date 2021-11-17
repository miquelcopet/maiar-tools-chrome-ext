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
        <Button
          style={{ flex: 1 }}
          onClick={() => history.push("/boot-withdraw")}
        >
          Withdraw Bootstrapping
        </Button>

        <Button
          style={{ flex: 1 }}
          onClick={() => history.push("/denver-restake")}
        >
          Denver Restake Calculator
        </Button>
        <Button
          style={{ flex: 1 }}
          onClick={() => history.push("/apr-calculator")}
        >
          APR Calculator
        </Button>
      </div>
    </DefaultLayout>
  );
}
