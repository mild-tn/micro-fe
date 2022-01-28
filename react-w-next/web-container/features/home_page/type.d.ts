/// <reference types="react" />

import { ButtonProps } from "../../types/app2/Button";
declare module "app2/Button" {
  const Button: React.ComponentProps<ButtonProps>;

  export default Button;
}

declare module "components/ButtonType" {
  const ButtonType: React.ComponentType;

  export default ButtonType;
}
