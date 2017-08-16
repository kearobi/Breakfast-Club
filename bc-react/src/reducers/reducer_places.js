//creating a reducer is a two step process. first is creating it, next is wiring it up
export default function(){
  return [
    {
      name: 'Breakfast Republic',
      address_street: '2730 University Ave',
      address_city: 'San Diego',
      address_state: 'CA',
      phone: '619 642-0299',
      yelp_rating: 4,
      image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
      categories: 'American (Traditional)',
      review_count: 1536,
      price: '$$'
    },
    {
      name: 'Breakfast World',
      address_street: '27330 University Ave',
      address_city: 'San Diego',
      address_state: 'CA',
      phone: '619 642-0299',
      yelp_rating: 3,
      image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
      categories: 'American (Traditional)',
      review_count: 15236,
      price: '$$$'
    }
  ]
}
