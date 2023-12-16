import * as RadixDialog from "@radix-ui/react-dialog";
import * as React from "react";

import { CloseIcon } from "../../icons/Close";
import { LogoIcon } from "../../icons/Logo";
import * as Styled from "./style.css";

interface DialogProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  title?: string;
  description?: string;
  closeButton?: React.ReactNode;
  primaryButton?: React.ReactNode;
}

// TODO: title, description, closeButton, primaryButton 같은 것들은 composable 하게 만들어야할까?
export const Dialog = (props: DialogProps) => {
  const { trigger, title, description, content, closeButton, primaryButton } = props;
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={Styled.overlay} />
        <RadixDialog.Content className={Styled.content}>
          <header className={Styled.contentHeader}>
            {title && (
              <RadixDialog.Title className={Styled.titleContainer}>
                <LogoIcon size={14} />
                <span className={Styled.title}>{title}</span>
              </RadixDialog.Title>
            )}
            <RadixDialog.Close asChild>
              <CloseIcon className={Styled.closeIcon} />
            </RadixDialog.Close>
          </header>

          {description && (
            <RadixDialog.Description className={Styled.description}>{description}</RadixDialog.Description>
          )}
          {content}

          <div className={Styled.buttonContainer}>
            {primaryButton && <RadixDialog.Close asChild>{primaryButton}</RadixDialog.Close>}
            {closeButton && <RadixDialog.Close asChild>{closeButton}</RadixDialog.Close>}
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
