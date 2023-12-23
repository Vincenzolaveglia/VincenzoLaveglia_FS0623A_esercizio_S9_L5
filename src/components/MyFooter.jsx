import { Row, Col, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Row className="text-center mt-5">
      <Col sm={{ span: 6, offset: 3 }}>
        <Row>
          <Col xs={12} className="text-left mb-2">
            <i className="fa fa-facebook footer-icon"></i>
            <i className="fa fa-instagram footer-icon"></i>
            <i className="fa fa-twitter footer-icon"></i>
            <i className="fa fa-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Contact us
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Audio Description
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Legal Notices
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Cookie Preferences
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-white text-opacity-25">
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button className="bg-dark border-white cursor-pointer opacity-25">Service Code</Button>
        <Row>
          <Col xs={12} className="text-white text-opacity-25 mb-2 mt-2 copyright">
            © 1997-2022 Netflix, Inc.
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MyFooter;
