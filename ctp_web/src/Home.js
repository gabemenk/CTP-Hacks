import React from 'react';

function Home() {
  return (
    <div>
      {/* Bootstrap CSS */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Custom */}
      <style>
        {`
          .nav-color {
            background: #73937E;
          }
          body {
            background: #fcfefe;
          }
          .nav-link {
            color: aliceblue;
          }
          .custom-border-top {
            border-top: 0.5px solid #4c4b4b; /* Change to your desired color */
          }
          .footer-color {
            background: #73937E;
          }
        `}
      </style>

      {/* Nav */}
      <section id="Header" className="nav-color fixed-top">
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/discussion" className="nav-link">
                  Discussion
                </a>
              </li>
              <li className="nav-item">
                <a href="/aboutus" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/survey" className="nav-link">
                  Survey
                </a>
              </li>
              <a href="/analysis" className="nav-link">
                  Analysis
                </a>
            </ul>
          </header>
        </div>
      </section>

      {/* Heroes */}
      <section id="Heroes">
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold text-body-emphasis">
            Welcome to CUNY Student Needs Survey
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Help us understand your needs and how we can improve the services
              available to you. Your feedback is crucial in shaping a better
              CUNY experience for all students.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a href="/survey">
              <button type="button"
                className="btn btn-primary btn-lg px-4 me-sm-3"
              >
                Start Survey
              </button>
            </a>
            </div>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
            <div className="container px-5">
              <img
                src="CUNY+CARES+RGB.jpg"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="Features">
        <div className="container px-4 py-5 custom-border-top" id="featured-3">
          <h2 className="pb-2 border-bottom">Student Support Services</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#collection"></use>
                </svg>
              </div>
              <h3 className="fs-2 text-body-emphasis">Food Security</h3>
              <p>
              "Explore initiatives and resources available to address food insecurity among CUNY students, including food pantries and meal programs."
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#people-circle"></use>
                </svg>
              </div>
              <h3 className="fs-2 text-body-emphasis">Housing Stability</h3>
              <p>
              "Learn about support services for students facing housing challenges, including emergency housing options and assistance programs."
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#toggles2"></use>
                </svg>
              </div>
              <h3 className="fs-2 text-body-emphasis">Mental Health Support</h3>
              <p>
              "Discover the mental health resources available on campus, including counseling services, workshops, and peer support groups."
              </p>
            </div>

            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#toggles2"></use>
                </svg>
              </div>
              <h3 className="fs-2 text-body-emphasis">Healthcare Access</h3>
              <p>
              "Find out how to access healthcare services through CUNY, including health centers, insurance information, and wellness programs."
              </p>
            </div>

            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#toggles2"></use>
                </svg>
              </div>
              <h3 className="fs-2 text-body-emphasis">Student Advocacy</h3>
              <p>
              "Get involved in advocating for student needs, from participating in surveys to joining student-led initiatives aimed at improving campus resources."
              </p>
            </div>

            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#toggles2"></use>
                </svg>
              </div>
              <h3 className="fs-2 text-body-emphasis">Resource Awareness</h3>
              <p>
              "Increase your awareness of the resources available to you at CUNY, ensuring you know where to turn for help when needed."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - will probably remove later */}
      <section id="Footer" className="footer-color">
        <div className="container custom-border-top">
          <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/discussion" className="nav-link px-2 text-body-secondary">
                  Discussion
                </a>
              </li>
              <li className="nav-item">
                <a href="/aboutus" className="nav-link px-2 text-body-secondary">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/survey" className="nav-link px-2 text-body-secondary">
                  Survey
                </a>
              </li>
              <li className="nav-item">
                <a href="/analysis" className="nav-link px-2 text-body-secondary">
                  Analysis
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 CUNY, Inc</p>
          </footer>
        </div>
      </section>

      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Home;
