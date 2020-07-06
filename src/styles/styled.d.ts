import 'styled-components/native';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        title : string,
            
        colors : {
            primary : string,
            secundary : string,
            tertiary : string,
            quaternary : string,
            background : string,
            buy : string,
            otherButtons : string,
        
        
            text : string,
            label : string,
            labelButton : string,
            labelButton1 : string
        
        }
    }
}