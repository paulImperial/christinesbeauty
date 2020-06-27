import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
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
    width: 100%;
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

const Form = () => {
  return (
    <StyledForm name="christinesbeauty" data-netlify="true">
      <input name="name" type="text" class="feedback-input" placeholder="Name" />
      <input name="email" type="email" class="feedback-input" placeholder="Email" />
      <input name="phone" type="telephone" class="feedback-input" placeholder="Your phone number" />
      <select name="advert" type="text" class="feedback-input">
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
      <textarea name="text" class="feedback-input" placeholder="Message"></textarea>
      <input type="submit" value="SUBMIT" />
    </StyledForm>
  );
};

export default Form;
