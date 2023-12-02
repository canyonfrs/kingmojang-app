import * as Menubar from "@radix-ui/react-menubar";

import * as Styled from "./menu.css";

export const 편집 = () => {
  return (
    <Menubar.Menu>
      <Menubar.Trigger asChild>
        <span className={Styled.trigger}>편집(E)</span>
      </Menubar.Trigger>

      <Menubar.Portal>
        <Menubar.Content className={Styled.content}>
          <Menubar.Item className={Styled.item}>
            <span>에욱(N)</span>
            <span className={Styled.rightSlot}>Ctrl+N</span>
          </Menubar.Item>
          <Menubar.Item className={Styled.item}>
            <span>에욱(W)</span>
            <span className={Styled.rightSlot}>Ctrl+Shift+N</span>
          </Menubar.Item>
          <Menubar.Separator className={Styled.seperator} />
          <Menubar.Item className={Styled.item}>
            <span>에욱(O)</span>
            <span className={Styled.rightSlot}>Ctrl+O</span>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
};
