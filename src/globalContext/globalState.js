import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    shoes: [
        {
            "air-jordan-3-valor-blue": {
              "name": "VALOUR BLUE",
              "price": "2500",
              "img":
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
            },
            "jordan-mars-270-london": {
              "name": "JORDAN MARS 270 LONDON",
              "price": "2800",
              "img":
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
            },
            "air-jordan-1-zoom-racer-blue": {
              "name": "RACER BLUE",
              "price": "5000",
              "img":
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
            },
            "air-jordan-3-valor-blue1": {
              "name": "VALOUR BLUE",
              "price": "1500",
              "img":
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
            },
            "jordan-mars-270-london2": {
              "name": "JORDAN MARS 270 LONDON",
              "price": "2000",
              "img":
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
            },
            "air-jordan-1-zoom-racer-blue3": {
              "name": "RACER BLUE",
              "price": "3500",
              "img":
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
            }
          }
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{state:state.shoes}}>
            {children}
        </GlobalContext.Provider>
    )
}