import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

export const viaLacteaTheme = extendTheme({
    colors: {
        viaLacteaPrimary: {
            "lightOrange": "#ff7a32",
            "orange": "#fe5900",
            "darkOrange": "#cc4900",
        },
        viaLacteaSecondary: {
            "lightGray": "#A3A3A3",
            "pink": "#EC4899",
            "blue": "#06B6D4"
            
        }
    }

})
