import React from "react";
import "./HowItIsWorks.css";

export default function HowItIsWorks() {
  return (
    <>
      <section className="work-section py-5">
        <div className="container ">
          <div className="row ">
            <div className="col-md-6">
              <div className="h2 pb-3">How It Works.</div>
              <p className="pb-3">
                Quis autem velis ets reprehender net etid quiste netsum <br />
                voluptate. Utise wisi enim minim veniam, quis etsad ets <br />
                aspernatis netsum stationes nets qualitats.
              </p>
              <div className="row g-2">
                <div className="col-md-5 linkdin">
                  <div className="h5">LinkedIn</div>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
                <div className="col-md-6 upwork ps-lg-4 ps-md-4">
                  <div className="h5">Upwork</div>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-3 border-0 shadow-sm p-2 rounded">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="bi bi-pencil-fill fs-4 pe-3 accordion-icon"></i>
                      <div className="h4"> Create Account</div>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      This is the first item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the style.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-0 shadow-sm p-2 rounded">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="bi bi-bar-chart-line-fill fs-4 pe-3 accordion-icon"></i>
                      <div className="h4"> Choose Package</div>{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      This is the first item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the style.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 shadow-sm p-2 rounded">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="bi bi-hand-thumbs-up-fill fs-4 pe-3 accordion-icon"></i>
                      <div className="h4"> Enjoy Smart</div>{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      This is the first item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the style.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
