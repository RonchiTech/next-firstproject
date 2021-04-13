import classes from './styles/EventItem.module.css';

import Button from '../ui/button';

import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowIcon from '../icons/arrow-right-icon';

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
    <li className={classes.item}>
      <img src={'/' + image} alt={title} className={classes.image} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{adjustedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{adjustedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={linkAddress}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
export default EventItem;
