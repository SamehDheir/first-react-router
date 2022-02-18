import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row py-4 fs-5 ">
            <div className="col-md-6 text-md-start text-sm-center mb-sm-3 copyrait">
              <div className="property">
                © 2021 <span className="fw-bold text-dark">Smart</span> Designed
                by{" "}
                <a href="https://themeforest.net/user/epic-themes/portfoliox">
                  Epic-Themes
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-md-end text-sm-center copyrait">
              Follw us:
              <a href="https://twitter.com">
                <i className="bi bi-twitter twitter-footer ms-3 fs-3 icon-footer"></i>
              </a>
              <a href="https://instagram.com">
                <i className="bi bi-instagram instagram-footer ms-3 fs-3 icon-footer"></i>
              </a>
              <a href="https://www.whatsapp.com/">
                <i className="bi bi-whatsapp whatsapp-footer ms-3 fs-3 icon-footer"></i>
              </a>
              <a href="https://google.com">
                <i className="bi bi-google google-footer ms-3 fs-3 icon-footer"></i>
              </a>
              <a href="https://github.com/">
                <i className="bi bi-github github-footer ms-3 fs-3 icon-footer"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
