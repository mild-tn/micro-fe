import * as React from "react";

import styles from "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => (
  <button className={styles.primary}>{children}</button>
);

export default Button;
