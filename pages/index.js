import Head from 'next/head';
import EvenList from '../components/events/EvenList'
import { getFeaturedEvents } from '../dummy-data';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>Next Project | Home Page</title>
      </Head>
      <h1>The Home Page</h1>
      <EvenList items={featuredEvents} />
    </div>
  );
}
