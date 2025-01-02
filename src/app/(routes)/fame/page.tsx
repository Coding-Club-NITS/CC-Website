import React from 'react'
import ExpandableCardDemo from '../../components/expandableCard'
import './style.css';
import TextRevealCardPreview from "../../components/textReveal"
import SpotlightPreview from "../../components/SpotlightPreview"
function page() {
  return (<div className="fame-container ">
    <SpotlightPreview/>
    <TextRevealCardPreview/>
    <ExpandableCardDemo />
  </div> 
    


    
    
  )
}

export default page
