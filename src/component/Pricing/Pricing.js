import React from "react";
import "./Pricing.css";
import testimonialsWoman from "./testimonials-woman.jpg";

export default function Pricing() {
  return (
    <>
      <section className="price-secton p-5">
        <div className="container-lg">
          <div className="row py-5 fs-1 title-price d-flex justify-content-center">
            Pricing for every business, at any stage
          </div>
          <div className="row g-4 text-start">
            <div className=" col-lg-4 col-md-6">
              <div className="card shadow card-price">
                <div className="card-body">
                  <h5 className="card-title text-center">BASIC</h5>
                  <p className="price  text-center fw-bolder">$25</p>
                  <p className="p-month text-center">Per Month</p>
                  <p className="card-text feature-card">
                    <i className="bi bi-check-circle-fill"></i> Custom Charts{" "}
                    <br />
                    <i className="bi bi-check-circle-fill"></i> 5 Mailboxes, 10
                    Gb Storage
                    <br />
                    <i className="bi bi-check-circle-fill"></i> Unlimited Free
                    Dashboards
                    <br />
                    <i className="bi bi-check-circle-fill"></i> Access to all
                    APIs
                    <br />
                  </p>
                  <div class="d-flex justify-content-center">
                    <button className="btn btn-lihgt text-primary border-1 border-primary fw-bold btn-hover">
                      FREE 15-DAY TRIAL
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card shadow card-price">
                <div className="card-body">
                  <h5 className="card-title text-center">STANDARD</h5>
                  <p className="price text-center fw-bolder">$99</p>
                  <p className="p-month text-center">Per Month</p>
                  <p className="card-text feature-card">
                    <i className="bi bi-check-circle-fill"></i>
                    <span className="m-1">Custom Charts</span> <br />
                    <i className="bi bi-check-circle-fill"></i> 5 Mailboxes, 10
                    Gb Storage
                    <br />
                    <i className="bi bi-check-circle-fill"></i> Unlimited Free
                    Dashboards
                    <br />
                    <i className="bi bi-check-circle-fill"></i> Access to all
                    APIs
                    <br />
                  </p>
                  <div class="d-flex justify-content-center">
                    <button className="btn btn-primary text-lihgt border-1 border-primary fw-bold btn-hovermdile">
                      FREE 15-DAY TRIAL
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-4 colum">
              <div className="card shadow card-price">
                <div className="card-body">
                  <h5 className="card-title text-center">PRO</h5>
                  <p className="price text-center fw-bolder ">$199</p>
                  <p className="p-month text-center">Per Month</p>
                  <p className="card-text feature-card">
                    <i className="bi bi-check-circle-fill"></i>{" "}
                    <span className="active">Custom Charts</span> <br />
                    <i className="bi bi-check-circle-fill"></i> 5 Mailboxes, 10
                    Gb Storage
                    <br />
                    <i className="bi bi-check-circle-fill"></i> Unlimited Free
                    Dashboards
                    <br />
                    <i className="bi bi-check-circle-fill"></i> Access to all
                    APIs
                    <br />
                  </p>
                  <div class="d-flex justify-content-center">
                    <button className="btn btn-lihgt text-primary border-1 border-primary fw-bold btn-hover ">
                      FREE 15-DAY TRIAL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="p-5 mt-5 features">
          <div className="container-lg">
            <div className="row text-start">
              <div className="text-center my-2 fs-1 title-pricing-tow">
                Amazing Features
              </div>

              <div className="col-lg col-sm-6">
                <div className="row">
                  <div className="col-md-2 text-start">
                    <i class="bi bi-gem gem-icon"></i>{" "}
                  </div>
                  <div className="col-md-9">
                    <h3>Support 24/7</h3>
                    <p>
                      Utise wisi enim nets venias, quis tation ullamcorper nets
                      lobotis nisle consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-6">
                <div className="row">
                  <div className="col-md-2 text-start">
                    <i class="bi bi-people people-icon"></i>{" "}
                  </div>
                  <div className="col-md-9">
                    <h3>User Friendly</h3>
                    <p>
                      Utise wisi enim nets venias, quis tation ullamcorper nets
                      lobotis nisle consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12">
                <div className="row">
                  <div className="col-md-1 col-lg-2 text-start">
                    <i className="bi bi-bell bell-icon "></i>
                  </div>
                  <div className="col-md-9">
                    <h3>Notifications</h3>
                    <p>
                      Utise wisi enim nets venias, quis tation ullamcorper nets
                      lobotis nisle consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------- */}
            <div className="row py-4">
              <div className="col-lg  col-sm-6">
                <div className="row">
                  <div className="col-md-2 text-start">
                    <i className="bi bi-gear gear-icon"></i>
                  </div>
                  <div className="col-md-9">
                    <h3>Accesibility</h3>
                    <p>
                      Utise wisi enim nets venias, quis tation ullamcorper nets
                      lobotis nisle consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-6">
                <div className="row">
                  <div className="col-md-2  text-start">
                    <i className="bi bi-cash-stack cash-stack-icon"></i>
                  </div>
                  <div className="col-md-9">
                    <h3>Cost Control</h3>
                    <p>
                      Utise wisi enim nets venias, quis tation ullamcorper nets
                      lobotis nisle consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12">
                <div className="row">
                  <div className="col-md-1 col-lg-2 text-start">
                    <i className="bi bi-chat-left-text chat-left-text-icon"></i>
                  </div>
                  <div className="col-md-9">
                    <h3>Chat With Friends</h3>
                    <p>
                      Utise wisi enim nets venias, quis tation ullamcorper nets
                      lobotis nisle consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------------------------? */}
        <section className="py-5 mt-3">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6  deta-woman text-center">
                <div>
                  “People who succeed in business aren't afraid to hear feedback
                  from their customers - they actually thrive from it.”
                </div>
                <div className="h5 pt-4">Johanna S. Richardson</div>
                <div className="fs-5 text-primary">CEO Essentials</div>
              </div>
              <div className="col-md-6">
                <img src={testimonialsWoman} alt="Woman" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
