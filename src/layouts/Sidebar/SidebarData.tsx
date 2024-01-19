import { AiFillCaretDown, AiFillCaretUp, AiOutlineHistory, AiOutlineHome, AiOutlineMoneyCollect, AiOutlineUser } from "react-icons/ai";
import { FaCog, FaOpencart } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";

import { SidebarItem } from "../../@types/sidebaritem.type";


export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome />
    },
    {
        title: 'Overview',
        path: '/overview',
        icon: <GrOverview />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'User',
                path: '/overview/users',
                icon: <AiOutlineUser />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <AiOutlineMoneyCollect />
            },
        ]
    },
    {
        title: 'Order',
        path: '/order',
        icon: <FaOpencart />
    },
    {
        title: 'History',
        path: '/history',
        icon: <AiOutlineHistory />
    },
    {
        title: 'Configuration',
        path: '/configuration',
        icon: <FaCog />
    },
]