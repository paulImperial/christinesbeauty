import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Spinner from '../Generic/Spinner';

const StyledH3 = styled.h3`
  color: ${(props) => props.theme.colours.pink};
`;

const StyledForm = styled.form`
  position: relative;
  body {
    background: rgb(30, 30, 40);
  }
  form {
    max-width: 420px;
    margin: 50px auto;
  }

  .feedback-input {
    color: ${(props) => props.theme.colours.baseBlack};
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colours.pink};
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;

    ::placeholder {
      color: ${(props) => props.theme.colours.pink};
    }
  }

  .feedback-input:focus {
    border: 2px solid ${(props) => props.theme.colours.pink};
  }

  textarea {
    height: 150px;
    line-height: 150%;
    resize: vertical;
  }

  [type='submit'] {
    font-family: inherit;
    width: 50%;
    background: ${(props) => props.theme.colours.pink};
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.colours.white};
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
  }
  [type='submit']:hover {
    background: ${(props) => props.theme.colours.mildPink};
  }
`;

const SSpinner = styled(Spinner)`
  height: 25%;
  width: 25%;
`;

const Form = () => {
  const [values, setValues] = useState({ name: '', email: '', phone: '', advert: '', message: '' });
  const [successfullSend, setSuccessfullSend] = useState(false);
  const [sending, setSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    const { name, email, phone, advert, message } = values;

    const data = JSON.stringify({ name, email, phone, advert, message });

    try {
      const response = await fetch('https://christines-beauty.netlify.app/.netlify/functions/emailer', {
        method: 'POST',
        body: data,
      });

      if (response.status === 200) {
        setSending(false);
        setSuccessfullSend(true);
      } else {
        setSending(false);
        setSuccessfullSend(false);
      }
    } catch (error) {
      setSending(false);
      setSuccessfullSend(false);
    }
  };

  return (
    <>
      {!successfullSend && (
        <StyledForm name="christinesbeauty" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            className="feedback-input"
            placeholder="Name"
            onChange={handleInputChange}
            value={values.name}
          />

          <input
            name="email"
            type="email"
            className="feedback-input"
            placeholder="Email"
            onChange={handleInputChange}
            value={values.email}
          />
          <input
            name="phone"
            type="telephone"
            className="feedback-input"
            placeholder="Your phone number"
            onChange={handleInputChange}
            value={values.phone}
          />
          <select name="advert" type="text" className="feedback-input" onChange={handleInputChange}>
            <option value="" disabled selected hidden>
              How did you hear about us?
            </option>
            <option value="google">Google</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="sign">Sign</option>
            <option value="flyer/advert">Flyer/Advert</option>
            <option value="recommendation">Recommendation</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="message"
            className="feedback-input"
            placeholder="Message"
            onChange={handleInputChange}
            value={values.message}
            rows="10"
          />
          {!sending && (
            <input
              className="g-recaptcha"
              data-sitekey="reCAPTCHA_site_key"
              data-callback="onSubmit"
              data-action="submit"
              type="submit"
              value="SUBMIT"
            />
          )}
        </StyledForm>
      )}
      {sending && <SSpinner />}
      {successfullSend && (
        <>
          <StyledH3>Thank you for your message.</StyledH3>
          <p>We will be in touch with you shortly.</p>
        </>
      )}
    </>
  );
};

export default Form;
