import React from "react";
import "./About.css";
import personOne from "./testimonials1.jpg";
import personTwo from "./testimonials2.jpg";
import personThree from "./testimonials3.jpg";
import zendesk from "./partner1.png";
import mailchimp from "./partner2.png";
import freeddom from "./partner3.png";
import intercom from "./partner4.png";
import freshdesk from "./partner5.png";
import partener6 from "./partner6.png";
import githup from "./partner7.png";
import bootstrap from "./partner8.png";
import reactjs from "./partner9.png";
import digitalMarketing from "./digital-marketing.png";

export default function About() {
  // const element = document.querySelector(".brand-image");
  // element.classList.add("animate__animated", "animate__bounceOutLeft");
  return (
    <section className="about-section text-center">
      <div className="container-lg">
        <div className="row p-5">
          <h2 className="title-section">How It Works</h2>
        </div>
        <div className="row pt-5 g-4 pb-5">
          <div className="col-lg col-md col-sm-12 shadow-lg p-4 me-4 items">
            <i className="bi bi-megaphone fs-1 text-success"></i>

            <h3>Search Oportunities</h3>
            <br />
            <p>
              Curabitur quamtis etsum lacus <br /> etsumis nulatis iaculis etsum
              vitae <br /> etsum ets nisle varius.
            </p>
          </div>
          <div className="col-lg col-md col-sm-12 shadow-lg p-4 me-4 items">
            <i className="bi bi-gem fs-1 text-danger"></i>
            <h3>Reach Clients</h3>
            <br />
            <p>
              Curabitur quamtis etsum lacus <br /> etsumis nulatis iaculis etsum
              vitae <br /> etsum ets nisle varius.
            </p>
          </div>
          <div
            className="col-lg col-md col-sm-12 shadow-lg p-4 items "
            // onMouseOver={mouseOvers()}
            id="demo"
          >
            <i className="bi bi-speedometer2 fs-1 text-primary"></i>
            <h3>Get Rewarded</h3>
            <br />
            <p>
              Curabitur quamtis etsum lacus <br /> etsumis nulatis iaculis etsum
              vitae <br /> etsum ets nisle varius.
            </p>
          </div>
        </div>
      </div>
      <div className="two">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators ">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active btn-carser "
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                className="btn-carser"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className="btn-carser"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card card-person border-0 my-5">
                  <div className="row g-0">
                    <div className="col-md-4 position-relative">
                      <img
                        src={personOne}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <a
                        href="https://www.youtube.com/watch?v=FPfQMVf4vwQ"
                        className="position-absolute video-icon"
                      >
                        <i class="bi bi-caret-right-fill"></i>{" "}
                      </a>
                    </div>
                    <div className="col-md-8 ">
                      <div className="card-body ">
                        <h5 className="card-title text-left">
                          <i className="bi bi-chat-left-quote"></i>
                        </h5>
                        <p className="card-text text-start ps-5 fs-5">
                          Nemo enimat ipsam voluptatem quia voluptas situm ets{" "}
                          <br />
                          aspernatis netsum loris fugit, sed quia magnitus
                          honoratis <br /> quis ratione sequi etum nets.
                        </p>

                        <p className="card-text text-start ps-5 fs-5">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                        <p>
                          JOHN DOE — General Manager <span>@BeSmart</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="carousel-item">
                <div className="card card-person border-0 my-5">
                  <div className="row g-0">
                    <div className="col-md-4 position-relative">
                      <img
                        src={personTwo}
                        className="img-fluid shadow-lg rou"
                        alt="..."
                      />
                      <a
                        href="https://www.youtube.com/watch?v=FPfQMVf4vwQ"
                        className="position-absolute video-icon"
                      >
                        <i class="bi bi-caret-right-fill"></i>{" "}
                      </a>{" "}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text text-start ps-5 fs-5">
                          Nemo enimat ipsam voluptatem quia voluptas situm ets{" "}
                          <br />
                          aspernatis netsum loris fugit, sed quia magnitus
                          honoratis <br /> quis ratione sequi etum nets..
                        </p>
                        <p className="card-text text-start ps-5 fs-5">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                        <p>
                          JOHN DOE — General Manager <span>@BeSmart</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="carousel-item">
                <div className="card card-person border-0 my-5">
                  <div className="row g-0">
                    <div className="col-md-4 position-relative">
                      <img
                        src={personThree}
                        className="img-fluid shadow-lg rou"
                        alt="..."
                      />
                      <a
                        href="https://www.youtube.com/watch?v=FPfQMVf4vwQ"
                        className="position-absolute video-icon"
                      >
                        <i class="bi bi-caret-right-fill "></i>{" "}
                      </a>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-left">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text text-start ps-5 fs-5">
                          Nemo enimat ipsam voluptatem quia voluptas situm ets{" "}
                          <br />
                          aspernatis netsum loris fugit, sed quia magnitus
                          honoratis <br /> quis ratione sequi etum nets.
                        </p>
                        <p className="card-text text-start ps-5 fs-5">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                        <p>
                          JOHN DOE — General Manager <span>@BeSmart</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="three py-5">
        <div className="container">
          <div className="row row-image pt-5 g-4">
            <div className="mb-5 fs-2 title-brand">
              Trusted By Over 9,000+ Businesses
            </div>
            <div className="col-md-1 col-sm-0"></div>
            <div className="col-md-2 col-sm-6">
              <a href="www.zendesk.com">
                <img
                  src={zendesk}
                  className="img-thumbnail brand-image shadow"
                />
              </a>{" "}
            </div>
            <div className="col-md-2 col-sm-6">
              <a href="www.mailchimp.com">
                <img
                  src={mailchimp}
                  className="img-thumbnail brand-image shadow"
                />
              </a>
            </div>
            <div className="col-md-2 col-sm-6">
              <a href="www.freeddom.com">
                <img
                  src={freeddom}
                  className="img-thumbnail brand-image shadow"
                />
              </a>
            </div>
            <div className="col-md-2 col-sm-6">
              <a href="www.intercom.com">
                {" "}
                <img
                  src={intercom}
                  className="img-thumbnail brand-image shadow"
                />
              </a>
            </div>
            <div className="col-md-2 col-sm-12">
              <a href="www.freshdesk.com">
                <img
                  src={freshdesk}
                  className="img-thumbnail brand-image shadow"
                />
              </a>
            </div>
          </div>
          <div className="col-md-1 col-sm-0"></div>
          <div className="row row-image py-sm-4 g-4">
            <div className="col-md-2 col-sm-0"></div>
            <div className="col-md-2 col-sm-6">
              <a href="">
                <img
                  src={partener6}
                  className="img-thumbnail brand-image shadow"
                />
              </a>
            </div>
            <div className="col-md-2 col-sm-6">
              <a href="www.githup.com">
                <img
                  src={githup}
                  className="img-thumbnail brand-image shadow"
                />
              </a>{" "}
            </div>
            <div className="col-md-2 col-sm-6">
              <a href="www.react.com">
                <img
                  src={reactjs}
                  className="img-thumbnail brand-image shadow"
                />
              </a>{" "}
            </div>
            <div className="col-md-2 col-sm-6">
              <a href="www.bootstrap.com">
                <img
                  src={bootstrap}
                  className="img-thumbnail brand-image shadow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="four-about my-md-5">
        <div className="container">
          <div className="row mt-md-5">
            <div className="col-md-6 text-start mt-5">
              <div className="details-four-about">
                <div className="pb-4 title-details-foyr-about ">
                  Discover how we can help you to grow your business fast.
                </div>
                <p className="fs-5">
                  Anticas quia voluptas sit aspernatur netsum demo ets ipsam
                  voluptatem lorem fugit, seditum netis velas net nesciunt.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-lg text-primary fs-5 me-2"></i>{" "}
                    Quias netus magni netsum qui ratione sequi.
                  </li>
                  <li>
                    <i className="bi bi-check-lg text-primary fs-5 me-2"></i>{" "}
                    Venis ratione sequi netus enim tempor magni.
                  </li>
                  <li>
                    <i className="bi bi-check-lg text-primary fs-5 me-2"></i>{" "}
                    Enim ipsam netus voluptatem voluptas.
                  </li>
                </ul>
                <a href="" className="btn btn-primary rounded">
                  Discover More
                </a>
              </div>
            </div>
            <div className="col-md-6 mt-lg-5 mb-sm-5">
              <img
                src={digitalMarketing}
                alt="digital-marketing"
                className="img-detials-four-about"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="statistics pt-5">
        <div className="container">
          <div className="title-statistics">Fun Facts About Our Agency</div>
          <div className="row statistics-row">
            <div className="col-md-1"></div>
            <div className="col-md-2 col-sm">
              <i class="bi bi-gift-fill"></i> <br />
              <span>1050+</span>
              <p>Projects Completed</p>
            </div>
            <div className="col-md-2 col-sm">
              <i class="bi bi-heart-fill"></i> <br />
              <span>217k</span>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-2 col-sm">
              <i class="bi bi-award-fill"></i> <br />
              <span>1210</span>
              <p>Design Awards</p>
            </div>
            <div className="col-md-2 col-sm">
              <i class="bi bi-basket3-fill"></i> <br />
              <span>217k</span>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-2 col-sm">
              <i class="bi bi-bell-fill"></i> <br />
              <span>2137</span>
              <p>Line Of Codes</p>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
