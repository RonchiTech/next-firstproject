import Head from 'next/head';
import EventList from '../../components/events/EvenList'
import { getAllEvents } from '../../dummy-data';
const EventsPage = () => {
  const allEvents = getAllEvents();
  return (
    <div>
      <Head>
        <title>Next Project | Events Page</title>
      </Head>
      <h1>Welcome to Events Page</h1>
      <EventList items={allEvents}/>
    </div>
  );
};
export default EventsPage;
