import * as Form from "@radix-ui/react-form";

import * as Styled from "./style.css";

export const Textarea = () => {
  return (
    <Form.Root className={Styled.container}>
      <Form.Field className={Styled.field} name="memo">
        <Form.Control className={Styled.textarea} asChild>
          <textarea autoFocus />
        </Form.Control>
      </Form.Field>
    </Form.Root>
  );
};
