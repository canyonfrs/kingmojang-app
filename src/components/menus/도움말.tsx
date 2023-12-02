import * as Menubar from "@radix-ui/react-menubar";

import * as Styled from "./menu.css";

export const 도움말 = () => {
  return (
    <Menubar.Menu>
      <Menubar.Trigger asChild>
        <span className={Styled.trigger}>도움말(H)</span>
      </Menubar.Trigger>

      <Menubar.Portal>
        <Menubar.Content className={Styled.content}>
          <Menubar.Item className={Styled.item}>
            <span>준비중이에요</span>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
};
