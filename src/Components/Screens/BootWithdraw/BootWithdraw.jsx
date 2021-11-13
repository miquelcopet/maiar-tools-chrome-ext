import React from "react";
import DefaultLayout from "../../Shared/DefaultLayout/DefaultLayout";
import styles from "./BootWithdraw.styles";
import AppInput from "../../Shared/AppInput/AppInput";
import { Statistic } from "antd";
import useBootWithdrawHook from "./BootWithdraw.hook";

export default function BootWithdraw() {
  const { state, actions } = useBootWithdrawHook();
  const result = (state.earnedMex / state.stakedLpDollar) * state.stakedLp;

  return (
    <DefaultLayout title={"Withdraw Bootstraping"} enableBack>
      <div style={{ paddingLeft: 8, paddingRight: 8 }}>
        <div style={styles.inputContainer}>
          <AppInput
            hint={"My Earned MEX ( $ )"}
            value={state.earnedMex}
            onChange={(value) => actions.setField("earnedMex", value)}
          />
          <AppInput
            hint={"My staked LP ( $ )"}
            value={state.stakedLpDollar}
            onChange={(value) => actions.setField("stakedLpDollar", value)}
          />
          <AppInput
            hint={"My staked LP"}
            value={state.stakedLp}
            onChange={(value) => actions.setField("stakedLp", value)}
          />
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}
        >
          <Statistic
            title={"Amount To Withdraw"}
            value={isNaN(result) ? "-" : result}
            precision={4}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
