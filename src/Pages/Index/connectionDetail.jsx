import { Button } from "react-bootstrap";

function ConnectionDetail(props) {
    return (
        <div className="row">
            <div className="col-md-12 text-center mt-5">
                <h1>MetaMask - {props.accountId === "" ? "Connect" : "Connected"}</h1>
                {props.accountId === "" ? (
                    <p>No wallet connected. Connect wallet to view accounts address.</p>
                ) : (
                    <p>Address: {props.accountId}</p>
                )}
                <div id="prepare">
                    <Button variant="primary" onClick={() => props.createConnection()}>
                        {props.accountId === "" ? "Connect" : "Disconnect"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ConnectionDetail;