/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import dotenv from 'dotenv';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
// CSS import
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

  const [t] = useTranslation('global');
  return (
    <Layout>
      <Titles>{t('contact.title')}</Titles>
      <CntContactMe>
        <CntForm>
          <Formik
            initialValues={{ subject: '', text: '', fromEmail: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.subject) {
                errors.subject = t('contact.sendgrid.errorSubject');
              }
              if (!values.text) {
                errors.text = t('contact.sendgrid.errorText');
              }
              if (!values.fromEmail) {
                errors.fromEmail = t('contact.sendgrid.errorEmail');
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.fromEmail)) {
                errors.fromEmail = t('contact.sendgrid.errorEmailInvalid');
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
                <Label>{t('contact.sendgrid.email')}</Label>
                <InputCSS
                  id="subjectInput"
                  type="email"
                  name="fromEmail"
                  placeholder={t('contact.sendgrid.email')}
                  onChange={handleChange}
                  value={values.fromEmail}
                />
                {errors.fromEmail && <p>{errors.fromEmail}</p>}

                <Label>{t('contact.sendgrid.subject')}</Label>
                <InputCSS
                  id="subjectInput"
                  type="text"
                  name="subject"
                  placeholder={t('contact.sendgrid.subject')}
                  onChange={handleChange}
                  value={values.subject}
                />
                {errors.subject && <p>{errors.subject}</p>}

                <Label>{t('contact.sendgrid.content')}</Label>
                <InputCSS
                  id="textInput"
                  type="textera"
                  rowsMax={6}
                  multiline
                  name="text"
                  placeholder={t('contact.sendgrid.content')}
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
                    {t('contact.sendgrid.button')}
                  </ButtonValidated>
                ) : (
                  <Button type="submit">{t('contact.sendgrid.button')}</Button>
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
