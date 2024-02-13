/** @format */

import React from "react";
import { useFormState } from "src/state/useFormState";
import { useSendContactForm } from "src/state/useSendContactForm";
import { ContactParams } from "src/models/common";
import { Layout } from "src/components/Layout";

const IndexPage: React.FC = () => {
  const [contact, handleChange] = useFormState<ContactParams>({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, sendContactForm] = useSendContactForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactForm(contact);
  };

  return (
    <div>
      <h1 className="ttl">
        Contact<span className="ttl__read">お問い合わせ</span>
      </h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form className="Contact__body" method="post" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="お名前"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="メールアドレス"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="メッセージ"
            name="message"
            onChange={handleChange}
            required
          />
        </div>
        <button className="Contact__btn fa fa-paper-plane" type="submit">
          お問い合わせをする
        </button>
      </form>
    </div>
  );
};

export default IndexPage;
