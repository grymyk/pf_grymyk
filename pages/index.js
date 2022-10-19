import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects/";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <Projects />
      </Layout>
    </div>
  );
}