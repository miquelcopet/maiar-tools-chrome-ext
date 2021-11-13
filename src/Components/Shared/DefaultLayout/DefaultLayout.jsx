import React from "react";
import styles from "./DefaultLayout.styles";
import { PageHeader } from "antd";
import DefaultHeader from "../DefaultHeader/DefaultHeader";

export default function DefaultLayout({ children, title, subtitle, onBack }) {
  return (
    <div style={styles.container}>
      <DefaultHeader />
      {title && (
        <PageHeader
          className="site-page-header"
          onBack={onBack ? () => onBack() : null}
          title={title}
          subTitle={subtitle}
        />
      )}

      {children}
    </div>
  );
}
