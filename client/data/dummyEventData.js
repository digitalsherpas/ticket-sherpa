var rp = require('request-promise');

const events = [
  {
    "eventName": "Ware",
    "quota": 42118,
    "ticketPrice": 3510,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Id duis adipisicing esse magna.",
    "addressLine1": "104 Lafayette Walk, Roosevelt, Maine, 5885",
    "addressLine2": "Menahan Street",
    "city": "Teasdale",
    "state": "New Mexico",
    "zipPostalCode": 35383,
    "country": "Nebraska",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  },
  {
    "eventName": "Branch",
    "quota": 72329,
    "ticketPrice": 7146,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Sit cillum exercitation anim proident deserunt do eu.",
    "addressLine1": "710 Billings Place, Lowgap, Nevada, 1391",
    "addressLine2": "Norfolk Street",
    "city": "Grenelefe",
    "state": "Alaska",
    "zipPostalCode": 36700,
    "country": "Oklahoma",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  },
  {
    "eventName": "May",
    "quota": 54123,
    "ticketPrice": 8625,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Voluptate voluptate eu tempor pariatur pariatur anim nostrud non enim dolor.",
    "addressLine1": "811 Baltic Street, Germanton, New Jersey, 5933",
    "addressLine2": "Fountain Avenue",
    "city": "Cannondale",
    "state": "Virgin Islands",
    "zipPostalCode": 50122,
    "country": "Texas",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  },
  {
    "eventName": "Hope",
    "quota": 28320,
    "ticketPrice": 6928,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Nostrud est nostrud laboris ut adipisicing deserunt adipisicing consectetur labore laboris do.",
    "addressLine1": "683 Stratford Road, Katonah, North Carolina, 9272",
    "addressLine2": "Veterans Avenue",
    "city": "Sims",
    "state": "Pennsylvania",
    "zipPostalCode": 32470,
    "country": "Illinois",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  },
  {
    "eventName": "Jami",
    "quota": 66696,
    "ticketPrice": 2161,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Eiusmod do consequat irure et duis est do aliqua labore anim ad velit exercitation.",
    "addressLine1": "900 Butler Street, Advance, Palau, 9707",
    "addressLine2": "Victor Road",
    "city": "Dupuyer",
    "state": "Arkansas",
    "zipPostalCode": 54404,
    "country": "District Of Columbia",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  },
  {
    "eventName": "Bowen",
    "quota": 91957,
    "ticketPrice": 2528,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Quis aliquip quis quis non.",
    "addressLine1": "679 Locust Avenue, Goodville, Mississippi, 5301",
    "addressLine2": "Amersfort Place",
    "city": "Wolcott",
    "state": "Colorado",
    "zipPostalCode": 17616,
    "country": "American Samoa",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  },
  {
    "eventName": "Montgomery",
    "quota": 76838,
    "ticketPrice": 5943,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Incididunt voluptate laborum laborum quis commodo.",
    "addressLine1": "321 Hewes Street, Hillsboro, Indiana, 648",
    "addressLine2": "Schenck Court",
    "city": "Belfair",
    "state": "Alabama",
    "zipPostalCode": 27921,
    "country": "Minnesota",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  },
  {
    "eventName": "Iris",
    "quota": 3669,
    "ticketPrice": 1218,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Labore culpa proident enim in laborum fugiat esse consequat enim labore sint nulla id non.",
    "addressLine1": "967 Centre Street, Newcastle, Rhode Island, 4250",
    "addressLine2": "Canarsie Road",
    "city": "Blanco",
    "state": "Georgia",
    "zipPostalCode": 20599,
    "country": "Utah",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  },
  {
    "eventName": "May",
    "quota": 47454,
    "ticketPrice": 8863,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Do amet excepteur occaecat dolor labore minim mollit.",
    "addressLine1": "142 Hart Place, Glidden, Federated States Of Micronesia, 6104",
    "addressLine2": "Box Street",
    "city": "Hall",
    "state": "Massachusetts",
    "zipPostalCode": 12770,
    "country": "Northern Mariana Islands",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  },
  {
    "eventName": "Noble",
    "quota": 29097,
    "ticketPrice": 7685,
    "startDateTime": "2038-12-30T23:30:30+00:00",
    "endDateTime": "2038-12-30T23:30:30+00:00",
    "description": "Laboris aliquip fugiat laboris ad duis cillum.",
    "addressLine1": "670 Vista Place, Frierson, Washington, 9622",
    "addressLine2": "Freeman Street",
    "city": "Rote",
    "state": "Guam",
    "zipPostalCode": 89777,
    "country": "West Virginia",
    "image": "http://www.hey.fr/fun/emoji/android/en/android/384-emoji_android_panda_face.png"
  }
];

events.forEach((event) => {
  rp({
    url: 'http://localhost:3000/api/events',
    method: 'POST',
    body: event,
    json: true,
  })
  .then(() =>{
    console.log('event created')
  })
  .catch((err) => {
    console.log(err)
  })
})
