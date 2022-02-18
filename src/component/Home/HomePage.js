import "./HomePage.css";
import bgHome from "./bg2.jpg";
import React from "react";

export default function HomePage() {
  return (
    <section className="pb-5 home-section">
      <div className="container-xlg position-relative">
        <div className="row div-img position-relative ">
          <div className="div-overlay"></div>
          <img src={bgHome} alt="background-image" className="img-home" />
        </div>
        <div className="row div-details position-absolute mx-auto">
          <h1>Welcome To Smart</h1>
          <p className="p-home">
            Excepteur sint occaecat cupidatat nonet proident, vante nisle
            culpamit <br />
            officiamisat quis autem etsim netsum loremisat entimus netsad.
          </p>
          {/* <div class="input-group  form-home">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email Adress"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-danger" type="button" id="button-addon2">
              Get started
            </button>
          </div> */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="icon-arrow"
              fill="currentColor"
              class="bi bi-chevron-double-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
