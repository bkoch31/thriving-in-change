import React from "react";
// import { Link } from "gatsby";
// import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <div className="header-wrapper header-style-02 header-negative-bottom clearfix">
        <header id="header" className="">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="top-bar-wrapper clearfix">
                          <div className="row">
                              <div className="col-md-3">
                                  <div id="logo">
                                      <a href="/">
                                          <img src="img/svg/consultingpress-logo-dark-green.svg" alt="ConsultingPress Management Consulting Template"/>
                                      </a>
                                  </div>
                              </div>
                              <div className="col-md-9">
                                  <div className="header-info-widgets hidden-xs hidden-sm">
                                      <ul className="clearfix">
                                          <li>
                                              <div className="icon-container">
                                                  <i className="lynny-phone-1"></i>
                                              </div>

                                              <div className="text-container">
                                                  <span>call us</span>
                                                  <p>
                                                      +00 41 258 9854
                                                  </p>
                                              </div>
                                          </li>

                                          <li>
                                              <div className="icon-container">
                                                  <i className="lynny-mail-duplicate"></i>
                                              </div>

                                              <div className="text-container">
                                                  <span>get in touch</span>
                                                  <a href="mailto:info@consultingpress.com">
                                                      info@consultingpress.com
                                                  </a>
                                              </div>
                                          </li>

                                          <li>
                                              <div className="icon-container">
                                                  <i className="lynny-globe-2_1"></i>
                                              </div>

                                              <div className="text-container">
                                                  <span>our locations</span>
                                                  <p>
                                                      <a href="management-contact-multilocation.html">
                                                          Global coverage
                                                      </a>
                                                  </p>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="header-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="main-navigation">
                              <nav className="navbar navbar-default nav-left pi-mega" role="navigation" aria-label="main-navigation">
                                  <div className="navbar-header">
                                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                                          <span className="sr-only">Toggle navigation</span>
                                          <span className="icon-bar"></span>
                                          <span className="icon-bar"></span>
                                          <span className="icon-bar"></span>
                                      </button>
                                  </div>
                                  <div id="main-nav" className="collapse navbar-collapse">
                                      <ul className="nav navbar-nav">
                                          <li className="current-menu-item">
                                              <a href="management-index.html">Home</a>
                                          </li>

                                          <li className="menu-item-has-children dropdown">
                                              <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">Who we are</a>

                                              <ul className="dropdown-menu">
                                                  <li><a href="management-about.html">About Us</a></li>
                                                  <li><a href="management-our-history.html">Our History</a></li>
                                                  <li><a href="management-our-team.html">Our Team</a></li>
                                                  <li><a href="management-team-member.html">Team Member Page</a></li>

                                                  <li className="dropdown dropdown-submenu menu-item-has-children">
                                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Careers</a>

                                                      <ul className="dropdown-menu">
                                                          <li><a href="management-job-listing.html">Job Listing</a></li>
                                                          <li><a href="management-job-single.html">Vacancy page</a></li>
                                                      </ul>
                                                  </li>

                                                  <li><a href="management-faq.html">FAQ</a></li>
                                                  <li><a href="management-testimonials.html">Testimonials</a></li>
                                                  <li><a href="management-partners.html">Partners</a></li>
                                                  <li><a href="management-pricing.html">Pricing</a></li>
                                                  <li><a href="management-events.html">Events</a></li>
                                              </ul>
                                          </li>

                                          <li className="menu-item-has-children dropdown">
                                              <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">What we do</a>

                                              <ul className="dropdown-menu">
                                                  <li><a href="management-services-image-grid.html">Services Image Grid</a></li>
                                                  <li><a href="management-services-image-grid-sidebar.html">Services Image Grid Sidebar</a></li>
                                                  <li><a href="management-industry-sectors.html">Industry Sectors Sidebar</a></li>
                                                  <li><a href="management-industry-sectors-02.html">Industry Sectors Full</a></li>
                                                  <li><a href="management-industry-sectors-single.html">Industry Sectors Single</a></li>
                                                  <li><a href="management-services-icons-grid.html">Services Icons Grid</a></li>
                                                  <li><a href="management-services-subcategory.html">Services Subcategory</a></li>
                                                  <li><a href="management-services-single.html">Services single</a></li>
                                              </ul>
                                          </li>

                                          <li className="menu-item-has-children dropdown">
                                              <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">Case studies</a>

                                              <ul className="dropdown-menu">
                                                  <li><a href="management-cases-grid.html">Cases Grid</a></li>
                                                  <li><a href="management-cases-grid-filters.html">Grid With Filters</a></li>
                                                  <li><a href="management-cases-list.html">Cases List</a></li>
                                                  <li><a href="management-case-single-sidebar.html">Case Single Sidebar</a></li>
                                                  <li><a href="management-case-single-full.html">Case Single Full</a></li>
                                              </ul>
                                          </li>

                                          <li className="menu-item-has-children dropdown">
                                              <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">News</a>

                                              <ul className="dropdown-menu">
                                                  <li><a href="management-news-grid.html">News Grid</a></li>
                                                  <li><a href="management-news-list.html">News List</a></li>
                                                  <li><a href="management-news-single.html">News Single</a></li>
                                              </ul>
                                          </li>

                                          <li className="menu-item-has-children dropdown">
                                              <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">Contact</a>

                                              <ul className="dropdown-menu">
                                                  <li><a href="management-contact-simple.html">Contact Simple</a></li>
                                                  <li><a href="management-contact-compact.html">Contact Compact</a></li>
                                                  <li><a href="management-contact-multilocation.html">Contact Multi Location</a></li>
                                              </ul>
                                          </li>

                                          <li className="dropdown pi-mega-fw menu-item-has-children">
                                              <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">Elements</a>

                                              <ul className="dropdown-menu">
                                                  <li>
                                                      <div className="pi-mega-content">
                                                          <div className="row">
                                                              <div className="col-md-3 pi-mm-col">
                                                                  <ul className="pi-mm-list">
                                                                      <li>
                                                                          <h3>Basic elements</h3>
                                                                      </li>

                                                                      <li><a href="management-elements-typography.html">Typography</a></li>                                                                            
                                                                      <li><a href="management-elements-grid.html">Grid system</a></li>
                                                                      <li><a href="management-elements-dividers.html">Dividers</a></li>
                                                                      <li><a href="management-elements-buttons.html">Buttons</a></li>
                                                                      <li><a href="management-elements-lists.html">List styles</a></li>
                                                                  </ul>
                                                              </div>

                                                              <div className="col-md-3 pi-mm-col">
                                                                  <ul className="pi-mm-list">
                                                                      <li>
                                                                          <h3>Interactive elements</h3>
                                                                      </li>

                                                                      <li><a href="management-elements-counters.html">Counters</a></li>
                                                                      <li><a href="management-elements-charts.html">Charts</a></li>
                                                                      <li><a href="management-elements-carousels.html">Carousels</a></li>
                                                                      <li><a href="management-elements-animations.html">Content animations</a></li>
                                                                      <li><a href="management-elements-social-widgets.html">Social widgets</a></li>
                                                                  </ul>
                                                              </div>

                                                              <div className="col-md-3 pi-mm-col">
                                                                  <ul className="pi-mm-list">
                                                                      <li>
                                                                          <h3>Always needed elements</h3>
                                                                      </li>

                                                                      <li><a href="management-elements-tabs.html">Tabs</a></li>
                                                                      <li><a href="management-elements-accordion.html">Accordion</a></li>
                                                                      <li><a href="management-elements-tables.html">Tables</a></li>
                                                                      <li><a href="management-elements-pricing-tables.html">Pricing tables</a></li>
                                                                      <li><a href="management-elements-contact-forms.html">Contact forms</a></li>
                                                                  </ul>
                                                              </div>

                                                              <div className="col-md-3 pi-mm-col">
                                                                  <ul className="pi-mm-list">
                                                                      <li>
                                                                          <h3>And more...</h3>
                                                                      </li>

                                                                      <li><a href="management-elements-feature-boxes.html">Feature boxes</a></li>
                                                                      <li><a href="management-elements-message-boxes.html">Message boxes</a></li>
                                                                      <li><a href="management-elements-testimonials.html">Testimonials</a></li>
                                                                      <li><a href="management-elements-latest-posts.html">Latest posts</a></li>
                                                                      <li><a href="management-elements-google-maps.html">Google maps</a></li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </div>

                                  <div className="nav-additional-links">
                                      <div id="search">
                                          <form>
                                              <input className="search-submit" type="submit" />
                                              <input id="m_search" name="s" type="text" placeholder="Type and hit enter..." />
                                          </form>
                                      </div>

                                      <div className="nav-plugins clearfix">
                                          <div className="wpml-languages enabled">
                                              <a className="active" href="#">
                                                  <span>en</span>
                                                  <i className="fa fa-chevron-down"></i>
                                              </a>

                                              <ul className="wpml-lang-dropdown">
                                                  <li>
                                                      <a href="#">de</a>
                                                  </li>

                                                  <li>
                                                      <a href="#">fr</a>
                                                  </li>

                                                  <li>
                                                      <a href="#">en</a>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </header>
      {/* <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
              </Link>
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                role="menuitem"
                tabIndex={0}
                onKeyPress={() => this.toggleHamburger()}
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/products">
                  Products
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
                <Link className="navbar-item" to="/contact/examples">
                  Form Examples
                </Link>
              </div>
              <div className="navbar-end has-text-centered">
              </div>
            </div>
          </div>
      </nav>*/}
      </div>
    );
  }
};

export default Navbar;
