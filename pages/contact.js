import Layout from "../components/Layout";
import Link from 'next/link';
// import ContactForm from "../components/ContactForm";

export default function Contact() {
  const email_style = `font-bold underline hover:text-violet-400`

  return (
    <Layout>
      <div className="max-w-screen px-4 py-12 mx-auto">
      
        <section className="text-gray-600 body-font relative">                
            <div className="lg:w-1/3 md:w-2/3 mx-auto">
                <div className="font-sans text-4xl font-extrabold leading-none tracking-tight my-3 dark:text-gray-300">
                    Contact
                </div>
                <div className="flex text-xl flex-col w-full my-12">
                <address className = "not-italic text-lg dark:text-gray-300">
                    Type me an email on <Link href="mailto:myko@grymyk.com">
                        <a className = {email_style} >myko@grymyk.com</a>
                    </Link>
                  </address>
                </div>
                {/* <ContactForm /> */}
            </div>
        </section>

      </div>
    </Layout>
  );
}
