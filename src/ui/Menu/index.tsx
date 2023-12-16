import * as RadixMenubar from "@radix-ui/react-menubar";

import * as Styled from "./style.css";

export const Menu = (props: RadixMenubar.MenubarMenuProps) => {
  return <RadixMenubar.Menu {...props} />;
};

// -------------------- //

export const Trigger = (props: RadixMenubar.MenubarTriggerProps) => {
  return <RadixMenubar.Trigger className={Styled.trigger} {...props} />;
};

// -------------------- //

export const Portal = (props: RadixMenubar.MenubarPortalProps) => {
  return <RadixMenubar.Portal {...props} />;
};

// -------------------- //

export const Content = (props: RadixMenubar.MenubarContentProps) => {
  return <RadixMenubar.Content className={Styled.content} {...props} />;
};

// -------------------- //

interface ItemProps extends RadixMenubar.MenubarItemProps {
  rightSlot?: React.ReactNode;
}
export const Item = (props: ItemProps) => {
  return (
    <RadixMenubar.Item className={Styled.item} {...props}>
      {props.children}
      {props.rightSlot && <span className={Styled.rightSlot}>{props.rightSlot}</span>}
    </RadixMenubar.Item>
  );
};

// -------------------- //

export const Separator = (props: RadixMenubar.MenubarSeparatorProps) => {
  return <RadixMenubar.Separator className={Styled.seperator} {...props} />;
};
