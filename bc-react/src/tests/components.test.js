import Header from "../bc-react/src/components/Header";
import Reminder from "../bc-react/src/components/Reminder";
const React = require("react");

it("should render a hardcoded header", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

it("should render a document title", () => {
  let event = {
    event: {
      id: 18,
      date: "2017-08-11T15:00:00.497Z",
      vote_status: false,
      winner: 1,
      active: true,
      speaker: "Joe",
      createdAt: "2017-08-06T05:15:43.434Z",
      updatedAt: "2017-08-06T05:15:43.434Z",
      place_1_id: 2,
      place_2_id: 3
    },
    guestLists: [],
    places: [
      {
        id: 2,
        name: "The Broken Yolk Cafe",
        address_street: "355 6th Ave",
        address_city: "San Diego",
        address_state: "CA",
        address_zip: "92101",
        phone: "(619) 338-9655",
        yelp_rating: 4,
        image_url:
          "https://s3-media1.fl.yelpcdn.com/bphoto/lIrTxkMsQN67d9YbdXcBqQ/o.jpg",
        categories: "Breakfast & Brunch",
        review_count: 1254,
        price: "$$",
        url: "https://www.yelp.com/biz/the-broken-yolk-cafe-san-diego-4",
        active: true,
        createdAt: "2017-06-02T14:52:29.000Z",
        updatedAt: "2017-06-02T14:52:29.000Z"
      },
      {
        id: 3,
        name: "Lazy Hippo",
        address_street: "416 3rd Ave",
        address_city: "San Diego",
        address_state: "CA",
        address_zip: "92101",
        phone: "(619) 546-6289",
        yelp_rating: 4,
        image_url:
          "https://s3-media3.fl.yelpcdn.com/bphoto/D8FWQeP3Kxtn4ZDJlsyzqQ/o.jpg",
        categories: "American (Traditional)",
        review_count: 163,
        price: "$$",
        url: "https://www.yelp.com/biz/lazy-hippo-san-diego-2",
        active: true,
        createdAt: "2017-06-02T14:52:29.000Z",
        updatedAt: "2017-06-02T14:52:29.000Z"
      }
    ],
    users: []
  };
  let user = {
    firstName: "bob",
    lastName: "jones",
    email: "bob@jones.com",
    neighborhood: "OB",
    voted: false,
    rsvp: false,
    id: 2,
    active: true,
    admin: false
  };
  const wrapper = shallow(<Reminder event={event} user={user} />);
  expect(wrapper).toMatchSnapshot();
});
