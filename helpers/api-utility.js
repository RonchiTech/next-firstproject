
export async function getAllEvents() {
  const res = await fetch(
    'https://nextjs-project-1b929-default-rtdb.firebaseio.com/events.json'
  );
  const data = await res.json();

  // const events = [];

  // for (const key in data) {
  //   events.push({
  //     id: key,
  //     ...data[key],
  //   });
  // }
  // return events;

  //OR try this


  const events = Object.keys(data).map((key) => {
    return {
      id: key,
      ...data[key],
    };
  });
  console.log(events);
  return events;
}
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
