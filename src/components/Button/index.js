import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder24: "rounded-radius24",
  icbCircleBorder20: "rounded-radius20",
};
const variants = {
  GradientPinkA200PinkA400: "bg-gradient  text-white_A700",
  icbFillRed600: "bg-red_600",
  icbFillGreenA700: "bg-green_A700",
  icbFillYellow500: "bg-yellow_500",
};
const sizes = {
  sm: "p-[16px] lg:p-[17px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px]",
  smIcn: "p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px]",
  mdIcn: "p-[11px] lg:p-[12px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder24", "icbCircleBorder20"]),
  variant: PropTypes.oneOf([
    "GradientPinkA200PinkA400",
    "icbFillRed600",
    "icbFillGreenA700",
    "icbFillYellow500",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbCircleBorder20",
  variant: "GradientPinkA200PinkA400",
  size: "sm",
};

export { Button };
