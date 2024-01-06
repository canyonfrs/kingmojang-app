import * as React from "react";

import { useAuth } from "../../context/AuthContext";
import { Button } from "../../ui/Button";
import { Dialog } from "../../ui/Dialog";
import { Input } from "../../ui/Input";
import * as Menubar from "../../ui/Menu";
import * as Styled from "./설정.css";

export const 설정 = () => {
  const { auth, isAuth, logout } = useAuth();
  const [code, setCode] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [isValid, setIsValid] = React.useState<boolean>(false);

  // const { refetch, data, isRefetching } = useValidateVerificationCode(code);

  const validateCode = (code: string) => {
    // TODO: remove this
    if (code !== "streamer_token") {
      setError("인증 코드가 일치하지 않습니다.");
      setIsValid(false);
      return false;
    }

    if (!code) {
      setError("인증 코드를 입력해주세요.");
      setIsValid(false);
      return false;
    }

    if (code.length < 6) {
      setError("인증 코드는 6자리 이상이어야 합니다.");
      setIsValid(false);
      return false;
    }

    setError("");
    setIsValid(true);
    return true;
  };

  const verifyCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateCode(code)) {
      return;
    }

    // TODO: 로컬스토리지에 저장하고, 새로고침 했을 때
    // refetch();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setCode(value);
  };

  const handleAuth = () => {
    auth(code);
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
                {isAuth ? (
                  <>
                    <p>이미 인증되었습니다.</p>
                    <Button onClick={logout}>로그아웃</Button>
                  </>
                ) : (
                  <>
                    <form autoFocus onSubmit={verifyCode} className={Styled.formContainer}>
                      <Input
                        type="text"
                        required
                        name="verificationCode"
                        placeholder="인증 코드 입력"
                        value={code}
                        onChange={handleChange}
                      />
                      <Button type="submit">인증</Button>
                    </form>
                    {error && <p className={Styled.formError}>{error}</p>}
                    {/* {isFetching && <p className={Styled.formValid}>인증 중...</p> */}
                    {isValid && <p className={Styled.formValid}>유효한 코드입니다.</p>}
                  </>
                )}
              </>
            }
            closeButton={<Button>취소</Button>}
            primaryButton={
              <Button onClick={handleAuth} disabled={!isValid}>
                {isAuth ? "인증됨" : "등록"}
              </Button>
            }
          />
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
};
