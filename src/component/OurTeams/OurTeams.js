import React from "react";
import "./OurTeams.css";
import team001 from "./team001.jpg";
import team002 from "./team002.jpg";
import team003 from "./team003.jpg";

export default function OurTeams() {
  return (
    <section className="mt-5">
      <div className="container-lg">
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <div className="row g-5 pb-5 mb-2 ">
          <div className="col-lg-4 col-md col-sm text-center">
            <img
              src={team001}
              className="img-fluid shadow img-works"
              alt="team-one"
            />
            <h2 className="mt-4">Christina Hawkings</h2>
            <p>Head of SEO</p>
            <p>
              Johnathan is our co-founder and has developed search strategies
              for a variety of clients for over 5 years.
            </p>
            <a href="https://www.twitter.com/">
              <i class="bi bi-twitter twitter-team icon-social"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i class="bi bi-instagram  instagram-team icon-social"></i>
            </a>
            <a href="https://en.wikipedia.org/wiki/Microphone">
              <i class="bi bi-mic mic-team icon-social"></i>
            </a>
            <a href="https://www.gmail.com/">
              <i class="bi bi-envelope-open envelope-open-team icon-social"></i>
            </a>
          </div>
          <div className="col-lg-4 col-md col-sm text-center">
            <img
              src={team002}
              className="img-fluid shadow img-works"
              alt="team-two"
            />
            <h2 className="mt-4">Christina Hawkings</h2>
            <p>Head of SEO</p>
            <p>
              Johnathan is our co-founder and has developed search strategies
              for a variety of clients for over 5 years.
            </p>
            <a href="https://www.twitter.com/">
              <i class="bi bi-twitter twitter-team icon-social "></i>
            </a>
            <a href="https://www.instagram.com/">
              <i class="bi bi-instagram instagram-team icon-social"></i>
            </a>
            <a href="https://en.wikipedia.org/wiki/Microphone">
              <i class="bi bi-mic mic-team icon-social"></i>
            </a>
            <a href="https://www.gmail.com/">
              <i class="bi bi-envelope-open envelope-open-team icon-social"></i>
            </a>
          </div>
          <div className="col-lg-4 col-md col-sm text-center">
            <img
              src={team003}
              className="img-fluid shadow img-works"
              alt="team-three"
            />
            <h2 className="mt-4">Christina Hawkings</h2>
            <p>Head of SEO</p>
            <p>
              Johnathan is our co-founder and has developed search strategies
              for a variety of clients for over 5 years.
            </p>
            <a href="https://www.twitter.com/">
              <i class="bi bi-twitter twitter-team icon-social "></i>
            </a>
            <a href="https://www.instagram.com/">
              <i class="bi bi-instagram instagram-team icon-social"></i>
            </a>
            <a href="https://en.wikipedia.org/wiki/Microphone">
              <i class="bi bi-mic mic-team icon-social"></i>
            </a>
            <a href="https://www.gmail.com/">
              <i class="bi bi-envelope-open envelope-open-team icon-social"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
