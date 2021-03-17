import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
.mt-12 {
  margin-bottom: 12px;
}
.loader-img {
  margin-left: 48%;
}
.loader-img img {
  width: 46px;
}
a {
  color: black !important;
}
a:hover {
  text-decoration: none!important;
  cursor: pointer;
}
.card {
  padding: 20px;
  margin-bottom: 10px;
}
.navbar-brand{cursor:pointer;}
.main-page-header .navbar-nav a{font-size:20px;}
.main-page-header .navbar-nav a:hover{background:#0062cc;color: #fff!important;padding: 4px 6px;}.
@media (max-width: 776px){
  h1{font-size: 13px !important;}
}
`;
