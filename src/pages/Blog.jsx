import BlogPage from "../component/BlogPage"
import HeroBanner from "../component/HeroBanner"

function Blog(){
    return(
        <>

            <HeroBanner
        badgeText="Blog !"
        titleLine1="New Insights"
        titleLine2=""
        highlightText=" Blog"
        subText="Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved."
      />

            <BlogPage/>          
        </>
    )
}
export default Blog