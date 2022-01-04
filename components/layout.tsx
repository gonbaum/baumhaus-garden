import React from "react";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 *
 * @param {React.ReactElement} Receives React children
 * @return {React.ReactElement} A layout component
 */
export default function Layout({ children }: LayoutProps) {
  return <div className={styles.container}>{children}</div>;
}
