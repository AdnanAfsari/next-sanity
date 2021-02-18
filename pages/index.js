import Head from 'next/head'
import { sanityStaticProps, useSanityQuery, PortableText } from "../utils/sanity";
import { groq } from 'next-sanity'
import { withDimensions, renderObjectArray } from 'sanity-react-extra'
import home from '../api/schemas/pages/landing/home';

const query = groq`{
  "site": *[ _type =='site'],
  "landingPage":  *[_type == "landingPage"] {
    sections[0]
  }
}`;

export const getStaticProps = async (context) => ({
  props: await sanityStaticProps({context, query})
})

export default function Landing(props) {
  const {
    data: {
      site,
      landingPage,
    },
  } = useSanityQuery(query, props)

  console.log(landingPage)
  return (
    <div >
      
    </div>
  )
}
