import React, { useState, createContext, useContext  } from 'react';
import { array } from 'prop-types';


export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
    let [menu, setMenu] = useState(
        [
            {
                id: 1,
                name: 'vava',
                flag: false,
                sub: [
                    {
                        name: 'vavat0',
                        flag: false,
                        sub: [{
                            name: 'vavat1',
                            flag: false,
                            sub: [{
                                name: 'vavat2',
                                flag: false,
                                sub: [{
                                    name: 'vavat1',
                                    flag: false,
                                    sub: [{
                                        name: 'vavat2',
                                        flag: false,
                                        sub: [{
                                            name: 'vavat1',
                                            flag: false,
                                            sub: [{
                                                name: 'vavat2',
                                                sub: []


                                            }]
                                        }]

                                    }]
                                }]

                            }]
                        }]
                    },
                    {
                        name: 'vava01',
                        flag: false,
                        sub: []
                    }]
            },
            {
                name: 'vava1',
                flag: false,
                sub: [{
                    name: 'vava11',
                    flag: false,
                    sub: []
                }]
            },
            {
                name: 'vava2',
                flag: false,
                sub: [{
                    name: 'vava21',
                    flag: false,
                    sub: []
                }]
            }
        ]
    )

    const hendleMenu = Menu => {
        Menu.flag= !Menu.flag
        menu=JSON.parse(JSON.stringify(menu))
        setMenu(menu)
    }

    return(
        <SideBarContext.Provider value={{menu,hendleMenu}}>
        { children }
    </SideBarContext.Provider>
    )
    
}
export default SideBarProvider