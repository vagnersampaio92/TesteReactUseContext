import React, { useContext, useState } from 'react';
import {SideBarContext} from '../../contexts/context'
import { Container, Pai, Name, Align } from "./style"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Submenu from '../SubMenu'
import Collapse from "@material-ui/core/Collapse";

const SideBar = ()=>{
    const {menu} = useContext( SideBarContext )
    const {hendleMenu} = useContext( SideBarContext )
    function handlestate(menu) {
        hendleMenu(menu)
    }
    return(
        <>
        <Container>{menu.map(m => (
            <>
                <Align>
                    {m.flag ? <ExpandMoreIcon onClick={() => handlestate(m)}></ExpandMoreIcon> : <ExpandLessIcon onClick={() => handlestate(m)}></ExpandLessIcon>}
                    <Name onClick={() => handlestate(m)}>{m.name}</Name>
                </Align>
                <Collapse in={m.flag}> {/* Efeito de transição na abertura   */}
                    <Pai elevation={4}>
                    <>
                            {m.sub &&
                                <Submenu menuprops={m.sub}></Submenu>
                            }
                       </>
                    </Pai>
                    
                </Collapse>
            </>
        ))}</Container>
    </>
    )

}

export default SideBar