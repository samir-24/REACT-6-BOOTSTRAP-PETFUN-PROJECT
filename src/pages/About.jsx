import HeroBanner from '../component/HeroBanner';
import PetCareFeatures from '../component/PetCareFeatures';

function About(){
    return(
         <HeroBanner 
        badgeText="About Us!"
        titleLine1="Caring Services"
        titleLine2="for Happy"
        highlightText="Pets"
        subText="Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved."
      />
    )
}
export default About