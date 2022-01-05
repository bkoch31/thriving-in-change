import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
// import FullWidthImage from "../components/FullWidthImage";
import '../components/scss/masterslider/style/masterslider.min.css';
// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <React.Fragment>
      <div className="master-slider-wrapper">
        <div id="mastersliderFullWidth02" className="master-slider-full-screen master-slider ms-skin-default mb-0">

            {/* FIRST SLIDE */}
            <div className="ms-slide">
                <img src="masterslider/blank.gif" data-src="img/slider/consultingpress-management-consulting-unlock-your-business-potential.jpg" alt="ConsultignPress Unlock Your Business Potential"/>
                <span className="ms-layer pi-caption-small" style={{
                        left: "0", top: '200px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "0"
                      }}>
                    management consulting
                </span>

                <h2 className="ms-layer pi-caption"
                style={{
                  left: "0", top: '260px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "500"
                }}>
                    Unlock Your
                </h2>

                <h2 className="ms-layer pi-caption"
                style={{
                  left: "0", top: '340px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "800"
                }}>
                    Business Potential
                </h2>

                <img className="ms-layer pi-link-arrow" src="masterslider/blank.gif" data-src="img/slider/circle-icon-green.svg" alt=""
                  style={{
                    left: "0", top: '445px', dataType: 'image', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "1100"
                  }}/>

                <span className="ms-layer pi-link"
                  style={{
                    left: "55px", top: '445px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "1100"
                  }}>
                    Learn more
                </span>

                <a href="management-services-image-grid.html"></a>

            </div>{/* END OF FIRST SLIDE */}

            {/* SECOND SLIDE */}
            <div className="ms-slide">
                <img src="masterslider/blank.gif" data-src="img/slider/consultingpress-management-consulting-shape-your-business-future.jpg" alt="ConsultingPress Management Consulting"/>
                <span className="ms-layer pi-caption-small" 
                  style={{
                    left: "0", top: '200px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "0"
                  }}>
                    management consulting
                </span>

                <h2 className="ms-layer pi-caption"
                    style={{
                      left: "0", top: '260px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "500"
                    }}>
                    Shape Your 
                </h2>

                <h2 className="ms-layer pi-caption"
                    style={{
                      left: "0", top: '340px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "800"
                    }}>
                    Business Future
                </h2>

                <img className="ms-layer pi-link-arrow" src="masterslider/blank.gif" data-src="img/slider/circle-icon-green.svg" alt="" 
                    style={{
                      left: "0", top: '450px', dataType: 'image', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "1100"
                    }}/>

                <span className="ms-layer pi-link"
                      style={{
                        left: "55px", top: '445px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "1100"
                      }}>
                    Learn more
                </span>

                <a href="management-services-image-grid.html"></a>

            </div>{/* END OF SECOND SLIDE */}

            <div className="ms-slide">
                <img src="masterslider/blank.gif" data-src="img/slider/consultingpress-management-consulting-improve-your-business-performance.jpg" alt="ConsultignPress Management Consulting Improve Your Business Performance"/>
                <span className="ms-layer pi-caption-small"
                      style={{
                        left: "0", top: '200px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "0"
                      }}>
                    management consulting
                </span>

                <h2 className="ms-layer pi-caption"
                    style={{
                      left: "0", top: '260px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "500"
                    }}>
                    Improve Your 
                </h2>

                <h2 className="ms-layer pi-caption"
                    style={{
                      left: "0", top: '340px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "800"
                    }}>
                    Business Performance
                </h2>

                <img className="ms-layer pi-link-arrow" src="masterslider/blank.gif" data-src="img/slider/circle-icon-green.svg" alt=""
                    style={{
                      left: "0", top: '445px', dataType: 'image', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "1100"
                    }}/>

                <span className="ms-layer pi-link"
                      style={{
                        left: "55px", top: '445px', dataType: 'text', dataEffect: "left(short)", duration: "500", dataHideEffect: "fade", dataDelay: "1100"
                      }}>
                    Learn more
                </span>

                <a href="management-services-image-grid.html"></a>

            </div>

        </div>
      </div>
      <div className="page-content">

          <div className="container">

              <div className="row">
                  <div className="col-md-12">
                      <div className="custom-heading-02">
                          <h2>Our Core Expertise</h2>
                          <span>explore what we do</span>
                      </div>
                  </div>
              </div>

              <div className="row mb-30">
                  <div className="col-md-4">
                      <div className="service-box service-box-03">
                          <div className="icon-container">
                              <i className="lynny-radar"></i>
                          </div>

                          <div className="text-container">
                              <a href="management-services-single.html">
                                  <h3>Strategy & Growth</h3>
                              </a>
                              <p>
                                  Defining your business goals and steps to achieve them.
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="service-box service-box-03">
                          <div className="icon-container">
                              <i className="lynny-globe-2_1"></i>
                          </div>

                          <div className="text-container">
                              <a href="management-services-global-expansion.html">
                                  <h3>Global Expansion</h3>
                              </a>

                              <p>
                                  Helping you grow and defend against the global challenges.
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="service-box service-box-03">
                          <div className="icon-container">
                              <i className="lynny-pages-1"></i>
                          </div>

                          <div className="text-container">

                              <a href="management-services-audit.html">
                                  <h3>Audit & Assurance</h3>    
                              </a>                            

                              <p>
                                  Helping to enhance the value of your business.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4">
                      <div className="service-box service-box-03">
                          <div className="icon-container">
                              <i className="lynny-user-group-2"></i>
                          </div>

                          <div className="text-container">

                              <a href="management-services-customer-strategy.html">
                                  <h3>Customer Strategy</h3>
                              </a>

                              <p>
                                  Achieve clear understanding of your customers needs.
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="service-box service-box-03">
                          <div className="icon-container">
                              <i className="lynny-building-2"></i>
                          </div>

                          <div className="text-container">
                              <a href="management-services-tax-consulting.html">
                                  <h3>Tax Consulting</h3>
                              </a>

                              <p>
                                  Understanding global taxes laws and practices.
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="service-box service-box-03">
                          <div className="icon-container">
                              <i className="lynny-globes"></i>
                          </div>

                          <div className="text-container">
                              <a href="management-services-subcategory.html">
                                  <h3>Mergers & Acquisitions</h3>
                              </a>

                              <p>
                                  We will help you expand your business.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </React.Fragment>
  );
      {/*<div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>*/}
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
