import React, { FC, useState } from "react";
import { SidebarItem } from "../../@types/sidebaritem.type";
import styled from "styled-components";
import { Link } from "react-router-dom";

type SidebarLinkProps = {
    item: SidebarItem
}

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //height: 3.75rem;
    font-size: 1.125rem;
    padding: 1.25rem;
    //color: #fff;
    //text-decoration: none;

    &:hover{
       background-color: #1f1f1b;
       border-left: 4px solid #6d44dc;
    }
`;


const SidebarLabel = styled.span`
    margin-left: 1.7rem;
`;

const DropdownLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //height: 3.75rem;
    font-size: 1.125rem;
    padding: 1.25rem;
    //color: #fff;
    //text-decoration: none;
    padding-left: 3rem;

    &:hover{
        background-color: #6d44dc;
    }
`

const Submenu: FC<SidebarLinkProps> = ({ item }) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => {
        setSubnav(!subnav);
    }

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div className="flex h-[1.5rem] items-center">
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
            </SidebarLink>
            {
                subnav && item?.subnav?.map((subnavItem, index) => {
                    return (
                        <DropdownLink key={index} to={subnavItem.path}>
                            <div className="flex h-[1.5rem] items-center">
                                {subnavItem.icon}
                                <SidebarLabel>{subnavItem.title}</SidebarLabel>
                            </div>
                        </DropdownLink>
                    )
                })
            }
        </>
    )
}

export default Submenu;