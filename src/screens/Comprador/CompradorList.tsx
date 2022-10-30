import { NativeBaseProvider, ScrollView } from "native-base";
import React from "react";
import { FunctionComponent } from "react";
import { viaLacteaTheme } from "../../config/theme/ColorTheme";

interface Props {
    
}
 
const CompradorList: FunctionComponent<Props> = () => {
    return ( 
        <NativeBaseProvider theme={viaLacteaTheme}>
            <ScrollView>
                    
            </ScrollView>
        </NativeBaseProvider>
     );
}
 
export default CompradorList;