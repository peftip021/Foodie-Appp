import React from "react";
import pickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const word = () => {
  const workInfoData = [
    {
      image: pickMeals,
      title: "Pick Meals",
      text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumq",
    },
    {
      image: ChooseMeals,
      title: "Choose Now Often",
      text: "Neque porro quisquam estEt harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How it works</h1>
        <p className="primary-text">
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </p>
      </div>
      <div className="work-section-button" style={{display: "flex"}}>
        {
            workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default word;
