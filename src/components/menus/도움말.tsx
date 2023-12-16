import * as Menubar from "../../ui/Menu";

export const 도움말 = () => {
  return (
    <Menubar.Menu>
      <Menubar.Trigger asChild>
        <span>도움말(H)</span>
      </Menubar.Trigger>

      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Item>
            <span>준비중이에요</span>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
};
