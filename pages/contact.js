import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";
import { Fragment } from "react";

function ContactPage() {
    return (
        <Fragment>
            <Head>
                <title>Contact me</title>
                <meta name='description' content='You can contact me and send messages after filling this form.' />
            </Head>
            <ContactForm />
        </Fragment>
    )
}
export default ContactPage;