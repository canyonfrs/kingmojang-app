import * as Menubar from "../../ui/Menu";

export const 파일 = () => {
  return (
    <Menubar.Menu>
      <Menubar.Trigger asChild>
        <span>파일(F)</span>
      </Menubar.Trigger>

      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Item>
            <span>에욱(N)</span>
            <span>Ctrl+N</span>
          </Menubar.Item>
          <Menubar.Item>
            <span>에욱(W)</span>
            <span>Ctrl+Shift+N</span>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>
            <span>에욱(O)</span>
            <span>Ctrl+O</span>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
};
