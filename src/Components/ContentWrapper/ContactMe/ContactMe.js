/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Formik } from 'formik';
import Title from 'react-vanilla-tilt';
import axios from 'axios';
import dotenv from 'dotenv';
import ReCAPTCHA from 'react-google-recaptcha';
// CSS import
import LinkedInImg from '../../../assets/img/linkedin.png';
import { Title as Titles } from '../../../Style-Components/GeneralCSS';
import {
  Layout,
  Form,
  Label,
  InputCSS,
  CntForm,
  Button,
  ButtonValidated,
  CntContactMe,
  CntSocials,
  UL,
  LI,
  LinkedIn,
  GitHub,
  Gmail,
} from '../../../Style-Components/ContactMeCSS';

const ContactMe = () => {
  dotenv.config();
  const recaptchaRef = React.createRef();
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <Layout>
      <Titles>Contact Me</Titles>
      <CntContactMe>
        <CntForm>
          <Formik
            initialValues={{ subject: '', text: '', fromEmail: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.subject) {
                errors.subject = 'You need a subject for the email';
              }
              if (!values.text) {
                errors.text = 'You need a text for the email';
              }
              if (!values.fromEmail) {
                errors.fromEmail = 'I need your email...';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.fromEmail)) {
                errors.fromEmail = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={async (values) => {
              console.log(values.subject, values.text, values.fromEmail);
              const token = await recaptchaRef.current.executeAsync();

              axios
                .post('https://old-recipes.herokuapp.com/contact', {
                  subject: values.subject,
                  text: values.text,
                  from: values.fromEmail,
                  response: token,
                })
                .then((response) => {
                  console.log(response);
                });
            }}
          >
            {({ errors, values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Label>Your email</Label>
                <InputCSS
                  id="subjectInput"
                  type="email"
                  name="fromEmail"
                  placeholder="Your email"
                  onChange={handleChange}
                  value={values.fromEmail}
                />
                {errors.fromEmail && <p>{errors.fromEmail}</p>}

                <Label>Subject for the email</Label>
                <InputCSS
                  id="subjectInput"
                  type="text"
                  name="subject"
                  placeholder="Subject of the email"
                  onChange={handleChange}
                  value={values.subject}
                />
                {errors.subject && <p>{errors.subject}</p>}

                <Label>Content of the email</Label>
                <InputCSS
                  id="textInput"
                  type="textera"
                  rowsMax={11}
                  multiline
                  name="text"
                  placeholder="Content of the email"
                  onChange={handleChange}
                  value={values.text}
                />
                {errors.text && <p>{errors.text}</p>}
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_RECAPTCHA_SECRET_KEY}
                  size="invisible"
                  ref={recaptchaRef}
                  onChange={onChange}
                />
                {!errors || !values.subject || !values.text || !values.fromEmail ? (
                  <ButtonValidated type="submit" disabled>
                    Submit
                  </ButtonValidated>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </Form>
            )}
          </Formik>
        </CntForm>
        <CntSocials>
          <UL>
            <LI data-text="LinkedIn">
              <LinkedIn href="https://linkedin.com/in/nicolas-gonzalez-sanabria">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </LinkedIn>
            </LI>
            <LI data-text="GitHub">
              <GitHub href="https://github.com/Nicolas-Gonzalez-zu">
                <i className="fa fa-github" aria-hidden="true" />
              </GitHub>
            </LI>
            <LI data-text="Gmail">
              <Gmail href="#">
                <i className="fa fa-envelope" aria-hidden="true" />
              </Gmail>
            </LI>
          </UL>
        </CntSocials>
      </CntContactMe>
    </Layout>
  );
};

export default ContactMe;
