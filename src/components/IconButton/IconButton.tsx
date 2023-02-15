import * as React from "react";
import styles from "./IconButton.module.scss";
import classNames from "classnames";

export type IconButtonSize = "small" | "medium" | "large";

export interface IconButtonProps
  extends React.ComponentPropsWithRef<"button"> {
  /**
   * The accessibile label for the Icon Button
   *
   * @default "Icon Button"
   */
  ariaLabel?: string;
  /**
   * The content for the Icon Button
   *
   * @note Content must be icons from "react-icons"
   */
  content: React.ReactElement;
  /**
   * The size for the IconButton
   *
   * @default "medium"
   */
  size?: IconButtonSize;
}

/**
 * @public
 *
 * @description
 *
 * The Icon Button component displays an icon and
 * allows a user to take an action.
 */
export const IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps
>((props, ref) => {
  const {
    ariaLabel = "Icon Button",
    className,
    content,
    size = "medium",
    ...rest
  } = props;

  const iconButtonContentClasses = classNames(
    className,
    styles.iconButton,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large
  );

  const iconSizeNumber =
    size === "medium" ? 22 : size === "small" ? 18 : 26;

  return (
    <button
      aria-label={ariaLabel}
      className={iconButtonContentClasses}
      ref={ref}
      {...rest}
    >
      {React.cloneElement(content, {
        size: iconSizeNumber,
      })}
    </button>
  );
});

IconButton.displayName = "IconButton";
