import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FlexBox = styled(
  ({
    children,
    padding,
    width = "100%",
    height,
    margin,
    flexDirection,
    flexWrap = "nowrap",
    justifyContent,
    alignItems,
    ...other
  }) => <div {...other}>{children}</div>
)`
  display: flex;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  height: ${props => props.height};
  width: ${props => props.width};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

FlexBox.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.string,
  margin: PropTypes.string,
  flexDirection: PropTypes.oneOf(["row", "column"]),
  justifyContent: PropTypes.oneOf([
    "start",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline"
  ]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap"])
};

export default FlexBox;
