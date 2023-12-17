import * as Form from "@radix-ui/react-form";

import type { Coordinate } from "../../hooks/useTextarea";
import useTextArea from "../../hooks/useTextarea";
import * as Styled from "./style.css";

export const Textarea = ({ setPosition }: { setPosition: React.Dispatch<React.SetStateAction<Coordinate>> }) => {
  const { textareaRef, coordinate } = useTextArea({});
  setPosition(coordinate);
  return (
    <Form.Root className={Styled.container}>
      <Form.Field className={Styled.field} name="memo">
        <Form.Control className={Styled.textarea} asChild>
          <textarea autoFocus ref={textareaRef} />
        </Form.Control>
      </Form.Field>
    </Form.Root>
  );
};
