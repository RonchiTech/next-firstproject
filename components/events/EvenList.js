import EventItem from './EventItem';
import classes from './styles/EventItem.module.css'
const EventList = (props) => {
  const { items } = props;
  
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default EventList;
