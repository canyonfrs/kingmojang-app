import * as Menubar from "@radix-ui/react-menubar";

import { CloseIcon } from "../icons/Close";
import { LogoIcon } from "../icons/Logo";
import { MinusIcon } from "../icons/Minus";
import { SquareIcon } from "../icons/Square";
import * as Styled from "./Header.css";
import { 도움말, 보기, 서식, 설정, 파일, 편집 } from "./menus";

const Header = () => {
  return (
    <header className={Styled.container}>
      <div className={Styled.topContainer}>
        <div className={Styled.topLeft}>
          <LogoIcon className={Styled.logo} />
          <span>제목 없음 - Windows 킹모장</span>
        </div>
        <div className={Styled.topRight}>
          <MinusIcon />
          <SquareIcon />
          <CloseIcon />
        </div>
      </div>
      <Menubar.Root className={Styled.bottomContainer}>
        <div className={Styled.bottomLeftContainer}>
          <파일 />
          <편집 />
          <서식 />
          <보기 />
          <도움말 />
        </div>
        <설정 />
      </Menubar.Root>
    </header>
  );
};

export { Header };
