import * as React from "react";

import { useAuthDispatch, useAuthState } from "../../context/AuthContext";
import { useValidateVerificationCode } from "../../hooks/useValidateVerificationCode";
import { Button } from "../../ui/Button";
import { Dialog } from "../../ui/Dialog";
import { Input } from "../../ui/Input";
import * as Menubar from "../../ui/Menu";
import * as Styled from "./설정.css";

export const 설정 = () => {
  const { user, authCode } = useAuthState();
  const { auth, logout, setAuthCode } = useAuthDispatch();

  const [error, setError] = React.useState<string>("");
  const [isValid, setIsValid] = React.useState<boolean>(false);

  const { data, refetch } = useValidateVerificationCode(authCode);

  const validateCode = (code: string) => {
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

    return true;
  };

  const verifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateCode(authCode)) {
      return;
    }

    const { data, error } = await refetch();
    const successStatus = data?.status;
    const errorStatus = error?.response?.status;

    if (errorStatus === 401) {
      setError("유효하지 않은 인증 코드입니다.");
      setIsValid(false);
      return;
    } else if (successStatus === 200) {
      setError("");
      setIsValid(true);
      return;
    } else {
      setError("알 수 없는 오류가 발생했습니다.");
      setIsValid(false);
      return;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setAuthCode(value);
  };

  const handleAuth = () => {
    const user = data?.data;
    if (!user) return;
    auth(user);
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
                {user ? (
                  <>
                    <p>이미 인증되었습니다.</p>
                    <Button onClick={logout}>인증 초기화</Button>
                  </>
                ) : (
                  <>
                    <form autoFocus onSubmit={verifyCode} className={Styled.formContainer}>
                      <Input
                        type="text"
                        required
                        name="verificationCode"
                        placeholder="인증 코드 입력"
                        value={authCode}
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
                {user ? "인증됨" : "등록"}
              </Button>
            }
          />
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
};
