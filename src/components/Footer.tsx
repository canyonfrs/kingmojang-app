import type { Coordinate } from "../hooks/useTextarea";
import * as Styled from "./Footer.css";

const Footer = ({ position }: { position: Coordinate }) => {
  return (
    <footer className={Styled.container}>
      {/* Line and Column */}
      <div className={Styled.lnCol}>{`Ln${position.row} , Col${position.column}`}</div>

      {/* Scale */}
      <div className={Styled.restItem}>100%</div>

      {/* OS */}
      <div className={Styled.restItem}>Windows (CRLF)</div>

      {/* Encoding */}
      <div className={Styled.restItem}>UTF-8</div>
    </footer>
  );
};

export { Footer };
