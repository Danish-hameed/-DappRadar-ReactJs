import { useEffect, useState } from "react";
import getWeb3 from "../../utils/getWeb3";
import ConnectionDetail from "./connectionDetail";
import PostListing from "./postListing";
import { FETCH } from "../../utils/fetch";
import { getCookie, setCookie } from "../../utils/cookies";
import { Wrapper } from './Css/style';

const baseUrl = "https://jsonplaceholder.typicode.com";

function Index() {
  const [state, setState] = useState({
    accountId: getCookie("accountId"),
    postList: [],
    isLoading: false,
  });
  // Component lifecycle that trigger on component initialization
  useEffect(() => {
    // Fetch post list if account is already connected
    if (state.accountId !== "") {
      fetchPost(state.accountId);
    }
  }, [])
  // Create connenction with meta mask
  async function createConnection() {
    try {
      let accountId = "";
      if (state.accountId === "") {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        // Get the contract instance.
        // const networkId = await web3.eth.net.getId();
        accountId = accounts[0] ? accounts[0] : "";
        fetchPost(accountId);
      }
      // Store accountId in cookie 
      setCookie("accountId", accountId)
      // Update component state
      setState({
        ...state,
        accountId,
      });
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
    }
  }
  // Fetch post list from api 
  async function fetchPost(accountId) {
    // Update component state to loading 
    setState({ ...state, accountId, isLoading: true, postList: [] })
    // Api request to get post listing
    let data = await FETCH("GET", baseUrl + "/posts");
    // Update post list in the component state 
    setState({ ...state, accountId, isLoading: false, postList: data })
  }
  return (
    <Wrapper className="container">
      <ConnectionDetail accountId={state.accountId} createConnection={createConnection} />
      <div className="mt-10"></div>
      {state.accountId !== "" ?
        <PostListing isLoading={state.isLoading} accountId={state.accountId} postList={state.postList} />
        : ""}
    </Wrapper>
  );
}

export default Index;
