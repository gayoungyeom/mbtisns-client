import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    body {
        margin: 0;
        &::-webkit-scrollbar{
            display: none !important;
        }
    }
`;

export default globalStyles;