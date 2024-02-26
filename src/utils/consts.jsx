// import store from "~/store";
import Icon from "../components/Icon";
import { store } from "../store/store.js";

// console.log(states);
export const mainMenu = [
    {
        path: "/",
        title: "Anasayfa",
        icon: {
            active: <Icon className="block" name="activeHome" size={24} />,
            passive: <Icon className="block" name="home" size={24} />,
        },
    },
    {
        path: "/explore",
        title: "Keşfet",
        icon: {
            active: <Icon className="block" name="activeSearch" size={24} />,
            passive: <Icon className="block" name="search" size={24} />,
        },
    },
    {
        path: "/notifications",
        title: "Bildirimler",
        notification: 2,
        icon: {
            active: <Icon className="block" name="activeNotification" size={24} />,
            passive: <Icon className="block" name="notification" size={24} />,
        },
    },
    {
        path: "/messages",
        title: "Mesajlar",
        icon: {
            active: <Icon className="block" name="activeMessages" size={24} />,
            passive: <Icon className="block" name="messages" size={24} />,
        },
    },
    {
        path: "/lists",
        title: "Listeler",
        icon: {
            active: <Icon className="block" name="activelist" size={24} />,
            passive: <Icon className="block" name="list" size={24} />,
        },
    },
    {
        path: "/bookmarks",
        title: "Yer İşaretleri",
        icon: {
            active: <Icon className="block" name="activeBookMarks" size={24} />,
            passive: <Icon className="block" name="bookMarks" size={24} />,
        },
    },
    {
        path: "/verified",
        title: "Onaylanmış",
        icon: {
            active: <Icon className="block" name="activeVerified" size={24} />,
            passive: <Icon className="block" name="verified" size={24} />,
        },
    },
    {
        path: () => {
            return `/${
                store?.getState()?.auth?.currentAccount?.username &&
                store?.getState()?.auth?.currentAccount?.username
            }`;
        },
        title: "Profil",
        icon: {
            active: <Icon className="block" name="activeProfile" size={24} />,
            passive: <Icon className="block" name="profile" size={24} />,
        },
    },
];

export const topics = [
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'tag',
			value: 'dilanpolat'
		}
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'query',
			value: 'Starlink'
		},
		postCount: 140
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'tag',
			value: 'dilanpolat'
		}
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'query',
			value: 'Starlink'
		},
		postCount: 15640
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'tag',
			value: 'dilanpolat'
		}
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'query',
			value: 'Starlink'
		},
		postCount: 15640
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'tag',
			value: 'dilanpolat'
		}
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'query',
			value: 'Starlink'
		},
		postCount: 15640
	}
]
