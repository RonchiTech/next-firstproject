import Link from 'next/link';
const EventItem = (props) => {
  const { title, image, date, location, id } = props.item;
  console.log('eventitem:', props);
  const adjustedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const adjustedAddress = location.replace(',', '\n');
  const linkAddress = `/events/${id}`;
  return (
    <li key={id}>
      <img
        src={'/' + image}
        alt={title}
        style={{ width: '500px', height: 'auto' }}
      />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{adjustedDate}</time>
          </div>
          <div>
            <address>{adjustedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={linkAddress}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};
export default EventItem;
