import React from "react";
import styles from "./DefaultHeader.module.css";

export default function DefaultHeader() {
  const logo = "https://s2.coinmarketcap.com/static/img/coins/64x64/6892.png";

  return (
    <div
      className={styles.shadow}
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 16,
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <img src={logo} style={{ height: 48, width: 48 }} alt="" />
      <div
        style={{
          fontSize: 16,
          marginLeft: 8,
          fontWeight: "bold",
        }}
      >
        Maiar Tools
      </div>
    </div>
  );
}
