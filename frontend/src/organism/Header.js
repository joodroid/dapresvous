import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Bulb from '../img/bulb.png'


const MainHead = (props) => {
  return (
    <div>

     <Breadcrumb>

          <div>
          <a href="#"><img src="{Bulb}" alt=""/></a>
          </div>

       <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
       <BreadcrumbItem><a href="#">Reply</a></BreadcrumbItem>
       <BreadcrumbItem active>Message</BreadcrumbItem>
     </Breadcrumb>
   </div>
  );
};

export default MainHead;
