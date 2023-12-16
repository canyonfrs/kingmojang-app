import * as React from "react";

import { Button } from "../../ui/Button";
import { Dialog } from "../../ui/Dialog";
import { Input } from "../../ui/Input";
import * as Menubar from "../../ui/Menu";
import * as Styled from "./설정.css";

export const 설정 = () => {
  const [error, setError] = React.useState<string | null>(null);
  const validateCode = (code: string) => {
    if (!code) {
      setError("인증 코드를 입력해주세요.");
      return false;
    }

    if (code.length < 6) {
      setError("인증 코드는 6자리 이상이어야 합니다.");
      return false;
    }

    setError(null);
    return true;
  };

  const verifyCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const verificationCode = e.currentTarget.verificationCode.value;
    if (!validateCode(verificationCode)) {
      return;
    }
  };

  return (
    <Menubar.Menu>
      <Menubar.Trigger asChild>
        <span>설정</span>
      </Menubar.Trigger>

      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Item>
            <span>에욱(N)</span>
            <span>Ctrl+N</span>
          </Menubar.Item>
          <Menubar.Separator />
          <Dialog
            title="인증 코드 입력"
            trigger={
              <Menubar.Item onSelect={(e) => e.preventDefault()}>
                <span>인증 코드 입력</span>
              </Menubar.Item>
            }
            description="이메일로 받은 인증 코드를 입력해주세요."
            content={
              <>
                <form autoFocus onSubmit={verifyCode} className={Styled.formContainer}>
                  <Input type="text" required name="verificationCode" placeholder="인증 코드 입력" />
                  <Button type="submit">인증</Button>
                </form>
                {error && <p className={Styled.formError}>{error}</p>}
              </>
            }
            closeButton={<Button>취소</Button>}
            primaryButton={<Button disabled>확인</Button>}
          />
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
};
