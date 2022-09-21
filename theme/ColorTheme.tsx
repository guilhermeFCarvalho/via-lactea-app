import React from 'react';

import { NativeBaseProvider, extendTheme } from 'native-base';
export const viaLacteaTheme = extendTheme({
    colors: {
        viaLacteaPrimary: {

            "50": "#ff7a32",
            "100": "#fe5900",
            "200": "#cc4900",
            "300": "#a83f07",
            "400": "#85360b"
        },
        viaLacteaSecondary: {
            "delete": "#EC4899",
            "edit": "#06B6D4"
        }
    }

})
