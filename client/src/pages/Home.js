import React from "react";
import { Jumbotron, Container, Card, CardColumns } from "react-bootstrap";

import { Link } from "react-router-dom";
import { QUERY_GET_PROJECTS_BY_UPVOTE } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";

const Home = () => {
  let publicProjects = [];

  const { loading, data } = useQuery(QUERY_GET_PROJECTS_BY_UPVOTE);

  if (!loading) {
    publicProjects = data?.getProjectsByUpvote || [];
  }

  return (
    <>
      <Jumbotron fluid className="homeHero">
        <h1 align="center" className="homeHeader">Share Your Stories.</h1>
      </Jumbotron>
      <Container>
        <h2 className="h2Header">Discover the most popular writing projects on AuthorHub!</h2>
        <CardColumns>
          {publicProjects.map((topProjects) => {
            return (
              <Card key={topProjects._id} border="dark">
                <Card.Body>
                  <Card.Title>
                    <Link to={`/readproject/${topProjects._id}`}>
                      {topProjects.title}
                    </Link>
                  </Card.Title>
                  <p className="small">Genre: {topProjects.genre}</p>
                  <Card.Text>{topProjects.summary}</Card.Text>
                  <Card.Footer>
                    <h5>Collaborators:</h5>
                    <ul>
                      {topProjects.collaborators.map((collaborators) => {
                        return <li>{collaborators.username}</li>;
                      })}
                    </ul>
                  </Card.Footer>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Home;
