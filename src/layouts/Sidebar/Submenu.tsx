import React, { FC, useState } from "react";
import { SidebarItem } from "../../@types/sidebaritem.type";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

type SidebarLinkProps = {
    item: SidebarItem
}

const SidebarLink = styled(Link) <{ isActive: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.125rem;
    padding: 1.25rem;
    background-color: ${({ isActive }) => (isActive ? "#6d44dc" : "initial")};
    border-left: ${({ isActive }) => (isActive ? "4px solid #6d44dc" : "none")};
    color: ${({ isActive }) => (isActive ? "#000" : "#fff")};
    text-decoration: none;

    &:hover{
       background-color: #1f1f1b;
       border-left: 4px solid #6d44dc;
    }
`;


const SidebarLabel = styled.span`
    margin-left: 1.7rem;
`;

const DropdownLink = styled(Link) <{ isActive: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //height: 3.75rem;
    font-size: 1.125rem;
    padding: 1.25rem;
    background-color: ${({ isActive }) => (isActive ? "#6d44dc" : "initial")};
    border-left: ${({ isActive }) => (isActive ? "4px solid #6d44dc" : "none")};
    color: ${({ isActive }) => (isActive ? "#000" : "#fff")};
    padding-left: 3rem;

    &:hover{
        background-color: #6d44dc;
    }
`

const Submenu: FC<SidebarLinkProps> = ({ item }) => {

    const location = useLocation();

    const [subnav, setSubnav] = useState(false);

    const isActive = location.pathname === item.path;

    const showSubnav = () => {
        setSubnav(!subnav);
    }

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav} isActive={isActive}>
                <div className="flex h-[1.5rem] items-center">
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
            </SidebarLink>
            {
                subnav && item?.subnav?.map((subnavItem, index) => {
                    const subItemIsActive = location.pathname === subnavItem.path;
                    return (
                        <DropdownLink key={index} to={subnavItem.path} isActive={subItemIsActive}>
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