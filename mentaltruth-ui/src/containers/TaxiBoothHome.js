import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/styles.css'
import Profiles from '../components/Profiles'
import Carousel from '../components/Carousel'
import taxi_main from '../images/taxi2n.jpg';

class TaxiBoothHome extends Component {
  render() {
    const taxi_profiles = [{
        name: 'Ernest Aaron',
        price: "120",
        title: "Miller By The Sea",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        }, {
        name: 'Kenlie Browne',
        price: "120",
        title: "Miller By The Sea",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },{
        name: 'Gracy Lou',
        price: "120",
        title: "Miller By The Sea",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },{
        name: 'Taylor Swift',
        price: "120",
        title: "Miller By The Sea",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },{
        name: 'Riri Lee',
        price: "120",
        title: "Miller By The Sea",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },{
        name: 'Sarah Lee',
        price: "120",
        title: "Miller By The Sea",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        }, ];
    return (
      <div>
          <div id="main_carousel">
            <Carousel src={taxi_main} desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32." label="Hassle Free Travels"/>
        </div>
        <Profiles profiles={taxi_profiles} />
      </div>  
    );
  }
}
export default TaxiBoothHome ;
