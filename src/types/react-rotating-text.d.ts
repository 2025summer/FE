// react-rotating-text.d.ts
declare module "react-rotating-text" {
  import * as React from "react";

  export interface RotatingTextProps {
    items: string[];
    pause?: number;
    typingInterval?: number;
    deletingInterval?: number;
    emptyPause?: number;
    typing?: number;
    style?: React.CSSProperties;
    className?: string;
  }

  const RotatingText: React.FC<RotatingTextProps>;
  export default RotatingText;
}
