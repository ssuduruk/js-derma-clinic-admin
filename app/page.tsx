import Hero from "./components/intro/Hero";
import Layout from "./components/intro/Layout";
import Section from "./components/intro/Section";

export default function Home() {
	return (
		<Layout>
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="about-us" className="h-[700px] bg-red-300">

      </Section>
      <Section id="services" className="h-[700px] bg-blue-300">

      </Section>
      <Section id="contact-us" className="h-[700px] bg-green-300">
        
      </Section>
		</Layout>
	);
}
