import React from "react";

const Contact = () => {
  return (
    <section className="contact-page section-space">
      <div className="container">
        <div className="page-header text-center">
          <p className="section-subtitle">Get In Touch</p>
          <h1 className="section-title">Contact Us</h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-box">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="button" className="btn hero-btn px-5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;