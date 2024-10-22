import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
// import { Resume } from "@/app/_components/Resume";
import Resume from "@/app/_components/resume-section";
import Service from "@/app/_components/services";
import Stats from "@/app/_components/stats";
import Portfolio from "@/app/_components/portfolio";
import Pricing from "./_components/pricing";
import Faq from "./_components/faq";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import Aos from "@/app/_components/aos";
import Testimonial from "./_components/testimonial";


export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);
  

  return (
    <main>
      <Container>
        <Aos/>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Resume/>
        <Service/>
        <Stats/>
        <Portfolio/>
        {/* <Pricing/> */}
        {/* <Faq/> */}
        <Testimonial/>
        <Contact/>

      </Container>
    </main>
  );
}
