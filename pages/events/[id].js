import { useRouter } from 'next/router';

const EventDetailPage= () => {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>Welcome to event #:{router.query.id}</h1>
    </div>
  );
};
export default EventDetailPage;
