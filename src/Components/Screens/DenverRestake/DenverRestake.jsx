import React from "react";
import styles from "./DenverRestake.styles";
import DefaultLayout from "../../Shared/DefaultLayout/DefaultLayout";
import useDenverRestakeHook from "./DenverRestake.hook";
import AppInput from "../../Shared/AppInput/AppInput";
import { Statistic } from "antd";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";

export default function DenverRestake() {
  const { state, actions } = useDenverRestakeHook();
  const unlockedValue = (66 * state.availableLp) / 100;
  const lockedValue = (33 * state.availableLp) / 100;

  return (
    <DefaultLayout
      title={"Denver restake calculator"}
      subtitle={"Splits in 66% - 33%"}
      enableBack
    >
      <div style={{ paddingLeft: 8, paddingRight: 8 }}>
        <div style={styles.inputContainer}>
          <AppInput
            hint={"Available LP"}
            value={state.availableLp}
            onChange={(value) => actions.setField("availableLp", value)}
          />
        </div>
        <div style={styles.results}>
          <Statistic
            title="Unlocked pool (x1)"
            value={isNaN(unlockedValue) ? "-" : unlockedValue}
            prefix={<UnlockOutlined />}
            precision={4}
          />
          <Statistic
            title="Locked pool (x2)"
            value={isNaN(lockedValue) ? "-" : lockedValue}
            prefix={<LockOutlined />}
            precision={4}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
