import React, { PropTypes, Component } from 'react';
import Event from './Event.jsx';
import SearchEvents from './SearchEvents.jsx';

// export default class Events extends Component {
//   constructor(props) {
//     super(props);
//   }
//   clickHandler(event) {
//   }
// }

export default class Events extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // fetch('/api/events')
    // .then((response) => {
    //   return response.json().then((json) => {
    //     console.log(json);
    //   });
    // });
    this.props.requestEvents();
    console.log(this.props.otherEvents);
  }

  render() {
    return (
      <div className="events">
        <SearchEvents />
        <h2>Events</h2>
        <ul>
          {this.props.events.map(event =>
            <Event
              key={event.eventName}
              {...event}
            />
          )}
        </ul>
      </div>
    );
  }
}

// const Events = ({ events }) => (
//   <div className="events">
//     <h2>Events</h2>
//     <ul>
//       {events.map(event =>
//         <Event
//           key={event.eventName}
//           {...event}
//         />
//       )}
//     </ul>
//   </div>
// );

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

// export default Events;
