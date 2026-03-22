
import ContactForm from "../component/ContactForm"
import TeamSection from "../component/TeamSection"
import HeroBanner from "../component/HeroBanner"

function OurDoctor() {

    return (
        <>
            <HeroBanner
                badgeText="Veterinarians"
                titleLine1="Dedicated Doctors"
                titleLine2="for Your"
                highlightText="Pets"
                subText="Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved."
            />

            <div className="mb-5"></div>

            <TeamSection />

            <ContactForm />
        </>
    )

}
export default OurDoctor