import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6">
            <div className="h2 pb-4">Get in touch</div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Full Name*"
              />
              <label for="floatingInput">Full Name*</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Email Adress*"
              />
              <label for="floatingPassword">Email Adress*</label>
            </div>
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Phone Number*"
              />
              <label for="floatingInput">Phone Number*</label>
            </div>
            <div>
              <label
                for="exampleFormControlTextarea1"
                className="form-label"
              ></label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Your Message..."
                rows="8"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary rounded border-0 mt-4 py-3 px-4 btn-form"
            >
              SEND MESSAGE
            </button>
          </div>
          <div className="col-md-6 lh-lg">
            <div className="h2 pb-4">How to find us</div>
            <div className="details-contact">
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9931.555649428561!2d-0.142039!3d51.515254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2zT3hmb3JkIFN0LCBMb25kb24sINin2YTZhdmF2YTZg9ipINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2sro!4v1640975635592!5m2!1sar!2sro"></iframe>{" "}
              </div>
              <div className="h5 text-dark mt-4">Head Office</div>
              <div>
                <i className="bi bi-geo-alt-fill me-2 text-primary"></i> 10
                Oxford Street, London, UK, E1 1EC
              </div>
              <div>
                <i className="bi bi-envelope-open-fill me-2 text-primary"></i>{" "}
                <a href=" office@smart.co.uk" className="link-company">
                  {" "}
                  office@smart.co.uk{" "}
                </a>
              </div>
              <div>
                <i className="bi bi-telephone-fill me-2 text-primary"></i> +44
                987 654 321
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
