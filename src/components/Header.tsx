import * as Menubar from "@radix-ui/react-menubar";

import * as Styled from "./Header.css";
import { Logo } from "./Logo";
import { 도움말, 보기, 서식, 파일, 편집 } from "./menus";

const Header = () => {
  return (
    <header className={Styled.container}>
      <div className={Styled.topContainer}>
        <div className={Styled.topLeft}>
          <Logo className={Styled.logo} />
          <span>제목 없음 - Windows 킹모장</span>
        </div>
        <div className={Styled.topRight}>
          <MinusIcon />
          <SquareIcon />
          <CloseIcon />
        </div>
      </div>
      <Menubar.Root className={Styled.bottomContainer}>
        <파일 />
        <편집 />
        <서식 />
        <보기 />
        <도움말 />
      </Menubar.Root>
    </header>
  );
};

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000000" viewBox="0 0 256 256">
    <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"></path>
  </svg>
);

const SquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000000" viewBox="0 0 256 256">
    <path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Z"></path>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000000" viewBox="0 0 256 256">
    <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
  </svg>
);

export { Header };
