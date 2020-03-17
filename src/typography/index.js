import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const fontFamilyMap = {
  base: "Libre Franklin, Lucida Grande, sans-serif",
  baseLight: "Libre Franklin Light, Lucida Grande, sans-serif",
  baselightItalic: "Libre Franklin Light Italic, Lucida Grande, sans-serif",
  baseMedium: "Libre Franklin Medium, Lucida Grande, sans-serif",
  alfaSlab: "Alfa Slab One, Lucida Grande, sans-serif"
};

const Typography = styled(
  ({
    component: Component = "div",
    children,
    fontSize = "14px",
    fontFamily,
    textAlign,
    align,
    color,
    lineHeight,
    ...other
  }) => <Component {...other}>{children}</Component>
)`
  font-size: ${props => `${props.fontSize}px`};
  font-family: ${props => fontFamilyMap[props.fontFamily || "base"]};
  text-align: ${props => props.align || "left"};
  color: ${props => props.color || "#333"};
  line-height: ${props => props.lineHeight || "24px"};
`;

Typography.propTypes = {
  component: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.oneOf(Object.keys(fontFamilyMap)),
  className: PropTypes.string,
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"])
};

export default Typography;
