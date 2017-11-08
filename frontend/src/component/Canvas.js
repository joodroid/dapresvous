import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import Header from './Header';
import Showcase from './Showcase';
// import SideBrowse from './SideBrowse';
// import SideAd from './SideAd';
import Footer from './Footer';
// import Login from './Login';

const SideBrowse = (props) => {
  return (
    <div>
      <Card>
        <Header />
        <Showcase />
        <Footer />
      </Card>
    </div>
  );
};

export default SideBrowse;
