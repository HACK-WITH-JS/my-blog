import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "firebaseApp";
import { toast } from "react-toastify";

export default function SignupForm() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);

      toast.success("회원가입에 성공했습니다");
    } catch (error) {
      console.log(error);
      toast.error("회원 가입에 실패 했습니다!");
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!value?.match(validRegex)) {
        setError("이메일 형식이 올바르지 않습니다.");
      } else {
        setError("");
      }
    }

    if (name === "password") {
      setPassword(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }

    if (name === "password_confirm") {
      setPasswordConfirm(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (value !== password) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }
  };

  return (
    <form className="form form--lg" onSubmit={onSubmit}>
      <h1 className="form__title">회원가입</h1>

      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          onChange={onChange}
        />
      </div>

      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={onChange}
        />
      </div>

      <div className="form__block">
        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <input
          type="password"
          name="passwordCheck"
          id="passwordCheck"
          required
          onChange={onChange}
        />
      </div>

      {error && error?.length > 0 && (
        <div className="form__block">
          <div className="form__error">{error}</div>
        </div>
      )}

      <div className="form__block">
        계정이 있으신가요?
        <Link to="/login" className="form__link">
          로그인 하기
        </Link>
      </div>

      <div className="form__block">
        <input
          type="submit"
          value="회원가입"
          className="form__btn--submit"
          disabled={error?.length > 0}
        />
      </div>
    </form>
  );
}
