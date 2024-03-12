import React from "react";
import Skills from "./Skills/Skills";
import PricingPlans from "./PricingPlans/PricingPlans";
import Services from "./Services/Services";

function ServicesPage() {
  return <div>
    <PricingPlans />
    <Services/>
    <Skills />
  </div>;
}

export default ServicesPage;
