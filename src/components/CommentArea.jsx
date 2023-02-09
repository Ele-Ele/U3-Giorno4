import { Form, ListGroup } from "react-bootstrap";
import { Component } from "react";

class CommentArea extends Component {
  state = {
    review: [],
  };

  fetchReview = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/"
      );

      if (res.ok) {
        const data = await res.json();

        this.setState({
          review: data,
        });
      } else {
        console.log("oooh noooo");
      }
    } catch (error) {
      console.log("nononononon");
    }
  };
  render() {
    return (
      <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add comments</Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Form.Group>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default CommentArea;
