import React, { useContext } from 'react';
import { SideBarContext } from '../../contexts/context'
import { Container, Pai, Name, Align, Extra } from "./style"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Submenu from '../SubMenu'
import Collapse from "@material-ui/core/Collapse";



export default function SubMenu({ menuprops }) {


    const { menu } = useContext(SideBarContext)
    const { hendleMenu } = useContext(SideBarContext)
    function handlestate(menu) {

        hendleMenu(menu)
    }
    return (

        <Container>
          
            {menuprops &&
                <>
                    {menuprops.map(m => (
                        <>
                            <Align>
                                {m.sub ?
                                    <>
                                        {m.sub.length > 0 ?
                                            <>{m.flag ? <ExpandMoreIcon onClick={() => handlestate(m)}></ExpandMoreIcon> : <ExpandLessIcon onClick={() => handlestate(m)}></ExpandLessIcon>}
                                                <Name onClick={() => handlestate(m)}>{m.name}</Name>
                                            </>
                                            :
                                            <Extra>{m.name}</Extra>
                                        }
                                    </> :
                                    <Extra>{m.name}</Extra>

                                }
                            </Align>
                            <Collapse in={m.flag} Teste>
                                <Pai elevation={4}>
                                    <>
                                        {m.sub &&
                                            <Submenu menuprops={m.sub}></Submenu>
                                        }
                                    </>
                                </Pai>
                            </Collapse>
                        </>
                    ))}
                </>

            }
        </Container>

    )
}

