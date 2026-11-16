import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { HexPortrait } from '../components/Hexagon'
import SkillsCarousel from '../components/SkillsCarousel'
import usePageTitle from '../usePageTitle'

export default function About() {
  usePageTitle(`About | ${site.name}`)

  return (
    <>
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[19rem_1fr] lg:gap-20">
        <div>
          <HexPortrait
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            className="mx-auto w-60 lg:sticky lg:top-28 lg:w-full"
          />
        </div>

        <div className="max-w-[40rem]">
          <h1 className="text-4xl font-bold sm:text-5xl">
                    Hi, I'm Harman
                  </h1>
          
                  <div className="mt-8 space-y-5">
                    <p>
                      I’m a web developer who created {site.business} with the set goal of hopefully one day building it up to becoming a digital marketing agency!</p>
                      
                      <p>What I work with the most at the moment is Wordpress when it comes to my client work. My clients so far have been a pretty prominent home builder in the Edmonton area.
                    </p>
                    <p>
                      Other than Wordpress, I have also worked with more modern frameworks like React/NextJs, Tailwind CSS, and Typescript. For my non-profit client, me and my team built the site using Astro a server-first JavaScript web framework designed for building fast, content-driven websites with mostly static content that allowed React and Tailwind components. What I enjoy most is taking a site that’s hard to use or hard to find and making it clear: better design, tidier code, and content that both people and search engines can follow. 
                    </p>
                
                    <p>Away from the screen, you’ll usually find me in the gym as it's my primary escape when the screens get to overwhelming. Lifing weigthts and just getting a sweat in is something I will never take for granted. Without it, I don't think my strive to be better and work my hardest wouldn't be as strong. The resilience and accountablity that comes with weightlifting helps me in everyday life especially with my work. Motivation is everything when there is so much saturation.</p>
                  </div>
          

          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/projects" className="btn btn-primary">
              See my projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <section aria-labelledby="skills-heading" className="pb-20">
        <div className="mx-auto mb-8 max-w-6xl px-5 sm:px-8">
          <h2 id="skills-heading" className="text-3xl font-bold sm:text-4xl">
            My Skills
          </h2>
        </div>
        <SkillsCarousel />
      </section>
    </>
  )
}
