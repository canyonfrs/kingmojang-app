import * as Form from "@radix-ui/react-form";

import { useMemoPad } from "../../context/MemoPadContext";
import * as Styled from "./style.css";

export const Textarea = () => {
  const { handleMemoPadChange, memoPad } = useMemoPad();

  return (
    <Form.Root className={Styled.container}>
      <Form.Field className={Styled.field} name="memo">
        <Form.Control className={Styled.textarea} asChild>
          <textarea autoFocus value={memoPad} onChange={handleMemoPadChange} />
        </Form.Control>
      </Form.Field>
    </Form.Root>
  );
};
