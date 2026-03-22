import ShopPage from "../component/ShopPage"
import HeroBanner from "../component/HeroBanner"
function Shop() {
    return (
        <>

            <HeroBanner
                badgeText="Shops!"
                titleLine1="Caring Services"
                titleLine2="for Happy"
                highlightText="Pets"
                subText="Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved."
            />

            <div className="mt-5"> </div>
            <ShopPage />
        </>
    )
}
export default Shop