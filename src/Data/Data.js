import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import person1 from '../images/people-1.png'
import person2 from '../images/people-2.png'
import person3 from '../images/people-3.png'
import fluoride from '../images/floride.png';
import cavity from '../images/cavity.png';
import whitening from '../images/whitening.png';
export const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        Icon: AccessTimeIcon,
        background: '#1CC7C1'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        Icon: LocationOnIcon,
        background: '#3A4256'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        Icon: WifiCalling3Icon,
        background: '#1CC7C1'
    }
];







export const blogsData = [
    {
        name: 'Dr. Sinthia',
        date: '23 April 2019',
        img: person3,
        title: 'Check at least a doctor in a year for your teeth'
    },
    {
        name: 'Dr. Monika',
        date: '23 April 2019',
        img: person2,
        title: 'Two time brush in a day can keep you healthy'
    },
    {
        name: 'Dr. John',
        date: '23 April 2019',
        img: person1,
        title: 'The tooth cancer is taking a challenge'
    }
]



export const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]





export const packages = [
    {
        id: 1,
        name: '1 day non-stop',
        des: 'One Event Live',
        price: 2,
        access: 'android'
    },
    {
        id: 2,
        name: '3 days super',
        des: '2 Shows with 2 live',
        price: 10,
        access: 'android smarttv'
    },
    {
        id: 3,
        name: '7 days rider',
        des: '5 Shows with 3 live',
        price: 30,
        access: 'android smart tv roku'
    },
    {
        id: 4,
        name: '15 days sporty',
        des: '8 Shows 5 live',
        price: 60,
        access: 'android smart tv roku kodi'
    },
    {
        id: 5,
        name: '30 days rock',
        des: '10 shows 6 live',
        price: 90,
        access: 'android smart tv roku kodi web-cross'
    },
    {
        id: 6,
        name: '45 days fun',
        des: '10 shows 10 live',
        price: 120,
        access: 'android smarttv roku kodi web-cross appletv'
    },
]