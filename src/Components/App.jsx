import React, { Component } from 'react';
import ContactSection from './ContactSection';
import CTA from './CTA';
import FeatureSection from './FeatureSection';
import Header from './Header';
import InsightSection from './InsightSection';
import Introduction from './Introduction';
import Main from './Main';
import Sponsors from './Sponsors';
import Testimonies from './Testimonies';
import Footer from './Footer';
import GoogleMapContainer from './googleApis/GoogleMap';

import './styles/Mobile/index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* header section */}
        <Header />
        <Main />
        <Sponsors />
        <Introduction />
        <InsightSection />
        <FeatureSection />
        <CTA />
        <Testimonies />
        <ContactSection />
        <GoogleMapContainer />
        <Footer />
      </div>
    );
  }
}
