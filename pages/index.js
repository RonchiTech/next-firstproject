import Head from 'next/head';
import EvenList from '../components/events/EvenList';
import { getFeaturedEvents } from '../helpers/api-utility';

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Next Project | Home Page</title>
      </Head>
      <h1>The Home Page</h1>
      <EvenList items={props.events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
 

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 25,
  };
}
