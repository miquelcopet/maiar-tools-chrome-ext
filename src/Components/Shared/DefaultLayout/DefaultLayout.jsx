import React from "react";
import styles from "./DefaultLayout.styles";
import { PageHeader } from "antd";
import DefaultHeader from "../DefaultHeader/DefaultHeader";
import { useHistory } from "react-router-dom";

export default function DefaultLayout({
  children,
  title,
  subtitle,
  enableBack,
}) {
  const history = useHistory();

  return (
    <div style={styles.container}>
      <DefaultHeader />
      {title && (
        <PageHeader
          className="site-page-header"
          onBack={enableBack ? () => history.goBack() : null}
          title={title}
          subTitle={subtitle}
        />
      )}

      {children}
    </div>
  );
}
