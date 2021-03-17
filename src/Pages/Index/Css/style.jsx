import styled from "styled-components";

export const Wrapper = styled.div`
  .card {
    height: 300px !important;
  }
  .card:hover {
    box-shadow: 0px 18px 20px -9px rgba(0, 10, 30, 0.75);
  }
  .card a {
    padding: 7px 7px;
    color: #fff;
    background: #007bff;
    color: #fff !important;
    margin-right: 3px;
    border-radius: 3px !important;
  }
  .card-body {
    padding: 0 !important;
  }
  .show-more {
    color: blue;
    cursor: pointer;
    font-size: small;
  }
  @media (max-width: 776px) {
    .card {
      width: auto !important;
      height: auto !important;
    }
    h1{font-size: 22px !important;}
    p{font-size: 13px !important;}
   .img-fluid{height:30px !important;}
   .btn-primary{padding:  3px 3px !important;}
  }
`;
