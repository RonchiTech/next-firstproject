import Head from 'next/head'
import { useRouter } from 'next/router';

const EventDetailPage= () => {
  const router = useRouter();
 

  return (
    <div>
      <Head>
        <title>{router.query.id} Event</title>
      </Head>
      <h1>Welcome to event #:{router.query.id}</h1>
    </div>
  );
};
export default EventDetailPage;
