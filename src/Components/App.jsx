import React, { Component } from 'react';
import ContactSection from './ContactSection';
import CTA from './CTA';
import FeatureSection from './FeatureSection';
import TopHeader from './Header';
import Header from './TopHeader';
import InsightSection from './InsightSection';
import Introduction from './Introduction';
import Main from './Main';
import Sponsors from './Sponsors';
import Testimonies from './Testimonies';
import Footer from './Footer';
import GoogleMapContainer from './googleApis/GoogleMap';

import './styles/Mobile/index.css';
import MapSection from './MapSection';
import Team from './Team';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* header section */}
        <TopHeader />
        <Header />
        <Main />
        <Sponsors />
        <Introduction />
        <InsightSection />
        <FeatureSection />
        <CTA />
        <Testimonies />
        <GoogleMapContainer />
        {/* <MapSection /> */}
        {/* <Team /> */}
        {/* <ContactSection /> */}
        <Footer />
      </div>
    );
  }
}
