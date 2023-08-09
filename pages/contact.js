import Layout from "../components/Layout";
import Link from 'next/link';
import Formspree from "../components/Formspree";

export default function Contact() {
  const email_cls = `font-bold underline hover:text-cyan-400 font-Spartan`
  const heading_cls = `text-4xl leading-none tracking-tight my-3
      dark:text-gray-300 font-Spartan
  `
  const address_cls = `not-italic text-lg dark:text-gray-300 font-Spartan`
  const section_cls = `text-gray-600 body-font relative`
  const holder_cls = `mx-auto sm:w-96`
  const adr_holder_cls = `flex text-xl flex-col w-full my-12`

  const title = `Get in touch`
  // const title = `Get in touch or type me an email on `

  return (
    <Layout>
      <div className="max-w-screen px-4 py-12 mx-auto">
      
        <section className = { section_cls } >                
            <div className = { holder_cls } >
                <div className = { heading_cls } >
                    Contact
                </div>

                <div className = { adr_holder_cls } >
                  <address className = { address_cls } >
                      { title }        
                      
                      {/* <Link href="mailto:myko@grymyk.com">
                        <a className = { email_cls } >myko@grymyk.com</a>
                      </Link> */}

                  </address>
                </div>

                <Formspree />
            </div>
        </section>

      </div>
    </Layout>
  );
}
