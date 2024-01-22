import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//icons
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";

//components
import Submenu from "./Submenu";


const Nav = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   height: 5rem;
   background-color: black;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
   width: 250px;
   height: 100vh;
   background-color: black;
   position: fixed;
   top: 0;
   left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
   transition: left 350ms ease-in-out;
`;

const SidebarWrap = styled.div``;


const Sidebar: FC = () => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const [isActive, setIsActive] = useState(false);

    const showSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
                <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineMenu />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={isSidebarVisible}>
                <SidebarWrap>
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineClose />
                    </NavIcon>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <Submenu item={item} key={index} />
                            )
                        })
                    }
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    )
};

export default Sidebar;