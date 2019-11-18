import { faUser, faDiceD6, faBell, faBookmark, faHome } from '@fortawesome/free-solid-svg-icons';

export const expenses = {
    January: {
        income: 1400.99,
        outcome: {
            food_restaurant: 230,
            shop: 800.25,
            others: 100.34
        }
    },
    February: {
        income: 1500.99,
        outcome: {
            food_restaurant: 450.55,
            shop: 35.25,
            others: 100.34
        }
    },
    March: {
        income: 1100.96,
        outcome: {
            food_restaurant: 230,
            shop: 500.25,
            others: 44.34
        }
    },
    April: {
        income: 1400.99,
        outcome: {
            food_restaurant: 230,
            shop: 850.25,
            others: 110.34
        }
    },
    May: {
        income: 1400.99,
        outcome: {
            food_restaurant: 230,
            shop: 700.85,
            others: 100.84
        }
    },
    June: {
        income: 1400.69,
        outcome: {
            food_restaurant: 230,
            shop: 840.75,
            others: 100.34
        }
    },
    July: {
        income: 1200,
        outcome: {
            food_restaurant: 230,
            shop: 200.25,
            others: 100.35
        }
    },
    August: {
        income: 1400.99,
        outcome: {
            food_restaurant: 230.44,
            shop: 340,
            others: 100.34
        }
    },
    September: {
        income: 1700.99,
        outcome: {
            food_restaurant: 430.40,
            shop: 800.25,
            others: 100.34
        }
    },
    October: {
        income: 1400.99,
        outcome: {
            food_restaurant: 230,
            shop: 800.25,
            others: 100.34
        }
    },
    November: {
        income: 1400.29,
        outcome: {
            food_restaurant: 230,
            shop: 900.25,
            others: 100.34
        }
    },
    December: {
        income: 1400.99,
        outcome: {
            food_restaurant: 230.55,
            shop: 800.25,
            others: 90.34
        }
    }
};

export const postsList = [
    {
        author: "Nocholas O'Brian",
        title: "Who are you and why you're standing here?",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "28 July",
        image: "main.jpg",
        likes: [
            { avatar: "avatar1.png" },
            { avatar: "avatar2.jpeg" },
            { avatar: "avatar1.png" },
            { avatar: "avatar2.jpeg" },
        ]
    },
    {
        author: "Nocholas O'Brian",
        title: "Who are you and why you're standing here?",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "28 July",
        image: "main.jpg",
        likes: [
            { avatar: "avatar1.png" },
            { avatar: "avatar2.jpeg" },
            { avatar: "avatar1.png" },
            { avatar: "avatar2.jpeg" },
        ]
    }
];

export const navList = [
    {
        page: '/user',
        icon: faUser,
    },
    {
        page: '/statistic',
        icon: faDiceD6,
    },
    {
        page: '/notification',
        icon: faBell,
    },
    {
        page: '/bookmark',
        icon: faBookmark,
    },
    {
        page: '/home',
        icon: faHome,
    },
];

export const gradientColorsMap = [
    {
        key: 'food_restaurant',
        firstColor: '#fd3f2f',
        secondColor: '#face15'
    },
    {
        key: 'shop',
        firstColor: '#8d4de8',
        secondColor: '#ff2366'
    },
    {
        key: 'others',
        firstColor: '#6956ec',
        secondColor: '#56b2ba'
    }
];
