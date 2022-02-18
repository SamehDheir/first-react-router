import React from "react";
import "./Blog.css";
import blog2 from "./blog2.jpg";
import blog3 from "./blog3.jpg";
import blog4 from "./blog4.jpg";

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="container-lg pt-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow  card-hover ">
              <div className="position-relative detalse-overlay">
                <div className="owerlay"></div>
                <img src={blog4} className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title lh-lg title-card">
                  The Guide To LinkedIn Ads
                </h5>
                <span>
                  <i className="bi bi-card-text lh-lg"></i> Marketing & Design —
                  11 Min Read
                </span>
                <p className="card-text">
                  Quis autem velis reprehender nets quiste voluptate velite
                  estum quants etsamis sedit varias nets.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow  card-hover position-relative">
              <div className="position-relative detalse-overlay">
                <div className="owerlay"></div>
                <img src={blog2} className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title lh-lg title-card">
                  Affinity Designer Quick Start
                </h5>
                <span>
                  <i className="bi bi-card-text lh-lg"></i> Marketing & Design —
                  11 Min Read
                </span>
                <p className="card-text">
                  Quis autem velis reprehender nets quiste voluptate velite
                  estum quants etsamis sedit varias nets.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow  card-hover">
              <div className="position-relative detalse-overlay">
                <div className="owerlay"></div>
                <img src={blog3} className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title lh-lg title-card">Our Happy Team</h5>
                <span>
                  <i className="bi bi-mic icon-mic lh-lg"></i> Marketing &
                  Design — 11 Min Read
                </span>
                <p className="card-text">
                  Quis autem velis reprehender nets quiste voluptate velite
                  estum quants etsamis sedit varias nets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
