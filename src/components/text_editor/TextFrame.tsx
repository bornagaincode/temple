import React from "react";
import classNames from "classnames";
import { Resizable } from "re-resizable";
import "./TextFrame.css";

interface ITextFrameProps {
  children: JSX.Element;
  width: number;
  minWidth?: number;
  maxWidth?: number;
  align?: "left" | "center" | "right";
}

function TextFrame(props: ITextFrameProps): JSX.Element {
  const { children, width, minWidth, maxWidth, align } = props;
  const defaultSize = {
    width,
    height: "auto",
  };

  const textFrameClasses = classNames("TextFrame", {
    [`TextFrame--${align}`]: align,
  });

  return (
    <Resizable
      defaultSize={defaultSize}
      className={textFrameClasses}
      minWidth={minWidth}
      maxWidth={maxWidth}
      handleClasses={{
        right: "TextFrame--handle",
        left: "TextFrame--handle",
      }}
      handleStyles={{
        right: {
          height: "10px",
          top: "calc(50% - 5px)",
        },
        left: {
          height: "10px",
          top: "calc(50% - 5px)",
        },
      }}
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: true,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      {children}
    </Resizable>
  );
}

export default TextFrame;
