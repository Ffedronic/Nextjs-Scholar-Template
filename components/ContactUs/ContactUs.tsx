import React, { FormEvent, useRef } from "react";
import $ from "jquery";

import emailjs from "@emailjs/browser";
import { Zoom } from "react-reveal";
import SectionHeading from "@/lib/SectionHeading/SectionHeading";

function ContactUs() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

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
          process.env.emailjsService,
          process.env.emailjsTemplate,
          templateParams,
          process.env.emailjsSecretKey
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
      <section className="my-5 py-5">
        <div className="contact-us section" id="contact">
          <div className="container">
            <article className="row">
              <div className="col-lg-6  align-self-center">
                <SectionHeading
                  title="Contact Us"
                  subtitle="Feel free to contact us anytime"
                  description=" Thank you for choosing our templates. We provide you best
                    CSS templates at absolutely 100% free of charge. You may
                    support us by sharing our website to your friends."
                />
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
            </article>
          </div>
        </div>
      </section>
    </Zoom>
  );
}

export default ContactUs;
