import Link from "next/link";
import React, { FormEvent, useRef } from "react";
import $ from "jquery";

import emailjs from "@emailjs/browser";
import { Zoom } from "react-reveal";
import ReCAPTCHA from "react-google-recaptcha";

function ContactUs() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function onChange(value) {
    console.log(value);
  }

  async function handleForm(event: FormEvent) {
    event.preventDefault();

    if (
      nameRef.current.value != null &&
      emailRef.current.value != null &&
      messageRef.current.value != null
    ) {
      $("#js-preloader").removeClass("loaded");

      const templateParams = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      };

      await emailjs
        .send(
          "service_iddklmo",
          "template_kz1nxtb",
          templateParams,
          "EkoPVt2uyOG0P6ltg"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";

            $("#js-preloader").addClass("loaded");
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    }
  }

  return (
    <Zoom>
      <div className="my-5 py-5">
        <div className="contact-us section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-6  align-self-center">
                <div className="section-heading">
                  <h6>Contact Us</h6>
                  <h2>Feel free to contact us anytime</h2>
                  <p>
                    Thank you for choosing our templates. We provide you best
                    CSS templates at absolutely 100% free of charge. You may
                    support us by sharing our website to your friends.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-content">
                  <form id="contact-form" onSubmit={handleForm}>
                    <div className="row">
                      <div className="col-lg-12">
                        <label htmlFor="name" className=" visually-hidden">
                          Name
                        </label>
                        <input
                          ref={nameRef}
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Your Name..."
                          autoComplete="on"
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <label htmlFor="email" className=" visually-hidden">
                          Email
                        </label>
                        <input
                          ref={emailRef}
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your E-mail..."
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <label htmlFor="message" className=" visually-hidden">
                          Message
                        </label>
                        <textarea
                          ref={messageRef}
                          name="message"
                          id="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          id="form-submit"
                          className="orange-button"
                        >
                          Send Message Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
}

export default ContactUs;
