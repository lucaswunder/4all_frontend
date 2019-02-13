import { createGlobalStyle } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700");
  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css");

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #ECF0F3;
    color: #FFF;
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  input, button {
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
