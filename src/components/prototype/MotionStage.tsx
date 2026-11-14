import { type ReactNode } from "react";
import "./motion-stage.css";

/** The application frame is anchored. Only its internal view track moves. */
export function MotionStage({ children }: { children: ReactNode }) {
  return <div className="bx-machine bx-motion-flow">
    <div className="bx-window-chassis" aria-hidden="true"/>
    {children}
  </div>;
}
