import { useState } from "react";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function PostListing(props) {
    return (
        <Fragment>
            {/* <div className="blog-card"> */}
            <h1>Post Listing</h1>
            <div className="row">
                {props.isLoading ? <div className="loader-img text-center">
                    <img className="center" src={require("../../assets/images/Spinner-1s-200px.gif").default} alt='' />
                </div> : props.postList.map((item, index) => {
                    return <PostItem key={index} {...item} />
                })}
            </div>
            {/* </div> */}
        </Fragment>
    );
}

function PostItem(props) {
    const [showMore, udpateShowMore] = useState(true);
    let body = props.body;
    let title = props.title;
    if (showMore && body.length > 200) {
        body = body.slice(0, 200) + "..."
    }
    if (title.length > 20) {
        title = props.title.slice(0, 20) + "..."
    }
    return <div className="col-lg-4 col-md-6 col-sm-12">
        <Card >
            <Card.Body>
                <Card.Title data-toggle="tooltip" data-placement="auto" title={props.title}>{title}</Card.Title>
                <Card.Text>{body}<span className="show-more" onClick={() => udpateShowMore(!showMore)}> {body.length > 200 ? showMore ? "Show more" : "Show less" : ""}</span></Card.Text>
                <div className="align-items-center justify-content-center">
                    <Link to={"/user/" + props.userId}>View Author</Link>
                </div>
            </Card.Body>
        </Card>
    </div>
}

export default PostListing;