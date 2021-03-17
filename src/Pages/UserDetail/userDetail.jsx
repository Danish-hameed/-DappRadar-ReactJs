import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FETCH } from "../../utils/fetch";
import { Button } from "react-bootstrap";

const baseUrl = "https://jsonplaceholder.typicode.com";
function Users(props) {
    const [state, setState] = useState({
        userDetail: {},
        isLoading: false,
    });
    // Component lifecycle that trigger on component initialization
    useEffect(() => {
        // fetch user detail
        if (props.match.params.id) {
            fetchUserDetail(props.match.params.id)
        }
    }, []);

    // fetch user detail
    async function fetchUserDetail(userId) {
        // Update component state to loading 
        setState({ isLoading: true, userDetail: {} });
        // Api request to get user detail
        let data = await FETCH("GET", baseUrl + "/users/" + userId);
        // Update post list in the component state 
        setState({ isLoading: false, userDetail: data })
    }
    function redirectToUrl(url) {
        props.history.push(url)
    }
    return (
        <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                <div className="well profile">
                    <div className="col-sm-12">
                        {state.isLoading ? <div className="loader-img ">
                            <img className="center" src={require("../../assets/images/Spinner-1s-200px.gif").default} alt='' />
                        </div> : Object.keys(state.userDetail).length > 0 ?
                            <div className="col-xs-12 col-sm-12">
                                <h2>{state.userDetail.name}</h2>
                                <p><strong>Username: </strong>{state.userDetail.username} </p>
                                <p><strong>Email: </strong>{state.userDetail.name} </p>
                                <p><strong>Phone: </strong>{state.userDetail.phone} </p>
                                <p><strong>Website: </strong>{state.userDetail.website} </p>
                                <p><strong>Company: </strong>{state.userDetail.company.name} </p>
                                <p><strong>Address: </strong>{`${state.userDetail.address.suite} ${state.userDetail.address.street} ,${state.userDetail.address.city}`} </p>
                            </div>
                            : ""}
                        <div className="text-center">
                            <Button onClick={() => redirectToUrl("/")}>Back</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;