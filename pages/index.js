import Head from 'next/head';
import { useEffect } from 'react';
import EvenList from '../components/events/EvenList';
import { getFeaturedEvents, getAllEvents } from '../helpers/api-utility';

export default function Home(props) {
  useEffect(()=>{
    console.log(props.allEvents);
    console.log(props.featuredEvents);
  })
  return (
    <div>
      <Head>
        <title>Next Project | Home Page</title>
      </Head>
      <h1>The Home Page</h1>
      <EvenList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  const allEvents = await getAllEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
      allEvents: allEvents,
    },
    revalidate: 25,
  };
}
