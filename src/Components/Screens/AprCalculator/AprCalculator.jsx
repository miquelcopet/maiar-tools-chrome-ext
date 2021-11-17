import React from "react";
import AppInput from "../../Shared/AppInput/AppInput";
import DefaultLayout from "../../Shared/DefaultLayout/DefaultLayout";
import styles from "./AprCalculator.styles";
import { Descriptions, Table, Collapse, Switch } from "antd";

export default function AprCalculator() {
  const { Panel } = Collapse;
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

  return (
    <DefaultLayout title={"APR Calculator"} enableBack>
      <div
        style={{
          display: "flex",
          paddingLeft: 8,
          paddingRight: 8,
          gap: 8,
          flexDirection: "column",
        }}
      >
        <AppInput hint={"Saldo"} />
        <AppInput hint={"Cotiz MEX(MEX dolares /nºMEX)"} />
      </div>

      <Collapse style={{ margin: 8 }}>
        <Panel header={"MEX Cada 6 seg por bloque"} key={"0"}>
          <Table
            dataSource={constantsData}
            columns={constantsColumns}
            pagination={false}
          />
        </Panel>
      </Collapse>

      <div
        style={{ display: "flex", gap: 8, paddingLeft: 8, fontWeight: "bold" }}
      >
        APR mayor 10.000%
        <Switch defaultChecked />
      </div>
    </DefaultLayout>
  );
}
