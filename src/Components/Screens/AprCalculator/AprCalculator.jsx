import React from "react";
import AppInput from "../../Shared/AppInput/AppInput";
import DefaultLayout from "../../Shared/DefaultLayout/DefaultLayout";
import styles from "./AprCalculator.styles";
import { Descriptions, Table, Collapse, Switch } from "antd";
import useAprCalculatorHook from "./AprCalculator.hook";

export default function AprCalculator() {
  const { Panel } = Collapse;
  const { state, actions } = useAprCalculatorHook();
  const constantsData = [
    {
      key: 1,
      mex: "250.000",
      egld: "3.750.000",
      busd: "1.000.000",
    },
  ];

  const constantsColumns = [
    {
      title: "MEX",
      dataIndex: "mex",
      key: "mex",
    },
    {
      title: "EGLD-MEX",
      dataIndex: "egld",
      key: "egld",
    },
    {
      title: "EGLD-BUSD",
      dataIndex: "busd",
      key: "busd",
    },
  ];

  const calculatorData = [
    {
      key: "Mex",
      farm: "MEX",
    },
    {
      key: "Egld",
      farm: "EGLD-MEX",
    },
    {
      key: "Usd",
      farm: "EGLD-USDC",
    },
  ];

  const calculatorColumns = [
    {
      title: "Farm",
      dataIndex: "farm",
      key: "farm",
      width: "10%",
    },
    {
      title: "APR MEX",
      dataIndex: "mexApr",
      key: "mexApr",
      width: "26%",
      render: (_, row) => {
        console.log(row);
        return (
          <div>
            <AppInput
              prefix={"%"}
              onChange={(value) => actions.setField(`apr${row.key}`, value)}
              value={state[`apr${row.key}`]}
            />
          </div>
        );
      },
    },
    {
      title: "APR",
      dataIndex: "hourApr",
      key: "hourApr",
      render: (_, row) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>{`Min: ${parseFloat(
              actions.getMinuteApr(state[`apr${row.key}`])
            ).toFixed(2)}%`}</div>
            <div>{`Hour: ${parseFloat(
              actions.getHourApr(state[`apr${row.key}`])
            ).toFixed(2)}%`}</div>
          </div>
        );
      },
    },
    {
      title: "Return $ ",
      dataIndex: "dollar",
      key: "dollar",
      render: (_, row) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>{`Min: ${parseFloat(
              actions.getMinuteDollar(state[`apr${row.key}`])
            ).toFixed(2)}$`}</div>
            <div>{`Hour: ${parseFloat(
              actions.getHourDollar(state[`apr${row.key}`])
            ).toFixed(2)}$`}</div>
          </div>
        );
      },
    },
  ];

  return (
    <DefaultLayout title={"APR Calculator"} enableBack>
      <div
        style={{ margin: 8, display: "flex", flexDirection: "column", gap: 8 }}
      >
        <AppInput
          hint={"Balance"}
          prefix={"$"}
          value={state.balance}
          onChange={(value) => actions.setField("balance", value)}
        />

        <Collapse>
          <Panel header={"MEX Cada 6 seg por bloque"} key={"0"}>
            <Table
              dataSource={constantsData}
              columns={constantsColumns}
              pagination={false}
            />
          </Panel>
        </Collapse>

        <Table
          dataSource={calculatorData}
          columns={calculatorColumns}
          pagination={false}
        />
      </div>
    </DefaultLayout>
  );
}
