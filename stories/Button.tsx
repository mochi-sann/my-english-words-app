import React from "react";
import "./button.css";
import { Button as ChakraButton } from "@chakra-ui/react";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  colorScheme?:
    | "blue"
    | "black"
    | "gray"
    | "red"
    | "orange"
    | "Yellow"
    | "Green"
    | "Teal"
    | "Cyan"
    | "Purple"
    | "Pink";
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  colorScheme = "gray",
  label,
  ...props
}) => {
  return (
    <ChakraButton
      type="button"
      // className={["storybook-button", `storybook-button--${size}`, mode].join(
      //   " "
      // )}
      colorScheme={colorScheme}
      style={{ backgroundColor }}
      {...props}
      w="30"
    >
      {label}
    </ChakraButton>
  );
};
