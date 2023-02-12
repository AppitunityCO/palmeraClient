import React, { useEffect, useState } from "react";
import { AppPropertyData } from "../../../../data/appPropertyData";
import { getData } from "../../../../utils/getData";
import BlogSection from "../../../home/corporate/Blog";
import PropertyServicesSection from "../../../home/enterprise/Propertyservices";
import TestimonialSection from "../../../home/enterprise/Testimonial";
import ServiceSection from "./Service";

const   WhatPeopleSay= [
  {
    details: 'Life before Company was very chaotic — we got a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.',
    img: '/assets/images/avatar/1.jpg',
    name: 'Aida Bugg',
  },
  {
    details:
      'It won’t be easy, but buying my own home has been a lifelong dream, and knowing that I will only get out of it what I put into it, I’m ready to get a little sweat on my brow and realize my dream to its fullest.',
    img: '/assets/images/avatar/1.jpg',
    name: 'Teri Dactyl',
  },
  {
    details:
      'LTo buy a nice home is to buy a better way of life. To choose a better way of life is to work toward well-being, life is to work toward well-beingand isn’t well-being what’s paramount.',
    img: '/assets/images/avatar/4.jpg',
    name: 'Elmer Harvy',
  },
  {
    details: 'The ability to see the order directly from the customer makes it so streamlined.Life before Company was very chaotic — we got a lot of mistyped orders.So with Company.',
    img: '/assets/images/avatar/1.jpg',
    name: 'Elmer Harvy',
  },
]

const LatestBlogInCorporate= [
  {
    img: "/assets/images/property/16.jpg",
    title: "Signs That You Should Sell Your Home Soon",
    place: " Phonics ,Newyork",
    detail: "Luxury real estate is sometimes use as store value, especially wealthy foreigners, without any particular attempt to rent. Some luxury units in London and New York City.",
    date: 18,
    month: "July",
    id: "30",
  },
  {
    img: "/assets/images/blog/2.jpg",
    title: "Twice profit than before you ever got in business.",
    place: " Cambridge,England",
    detail: "Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type.",
    date: 19,
    month: "june",
    id: "31",
  },
  {
    img: "/assets/images/blog/3.jpg",
    title: "What Are Credit Scores And Why Are They Important?",
    place: " Barcelona,London",
    detail: "The most common and most absolute type of real estate property, the tenant enjoys the greatest discretion over the disposal of the estate property.",
    date: 18,
    month: "May",
    id: "32",
  },
  {
    img: "/assets/images/property/18.jpg",
    title: "Things To Look Out For When Viewing A Property.",
    place: "Berlin,Germany",
    detail: "An interior designer is someone who plans,researches,construction sites, coordinates,management and manages such enhancement projects.",
    date: 26,
    month: "Feb",
    id: "33",
  },
  {
    img: "/assets/images/blog/2.jpg",
    title: "Things To Look Out For When Viewing A Property.",
    place: "Berlin,Germany",
    detail: "An interior designer is someone who plans,researches,construction sites, coordinates,management and manages such enhancement projects.",
    date: 26,
    month: "Feb",
    id: "33",
  },
  {
    img: "/assets/images/blog/1.jpg",
    title: "Signs That You Should Sell Your Home Soon",
    place: " Phonics ,Newyork",
    detail: "Luxury real estate is sometimes use as store value, especially wealthy foreigners, without any particular attempt to rent. Some luxury units in London and New York City.",
    date: 18,
    month: "July",
    id: "34",
  },
  {
    img: "/assets/images/blog/3.jpg",
    title: "What Are Credit Scores And Why Are They Important?",
    place: " Barcelona,London",
    detail: "The most common and most absolute type of real estate property, the tenant enjoys the greatest discretion over the disposal of the estate property.",
    date: 18,
    month: "May",
    id: "35",
  },
]
const BodyContent = ({desc , title}) => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();


  return (
    <>
      <ServiceSection desc={desc} title={title} />
      <PropertyServicesSection value={AppPropertyData.PropertyServices} />
      <div className="bg-light">
        <TestimonialSection value={WhatPeopleSay} />
      </div>      
      <BlogSection value={LatestBlogInCorporate} />
    </>
  );
};

export default BodyContent;
