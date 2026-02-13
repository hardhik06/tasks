import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Hardhik Annam</p>
            <p>Hello World</p>

            <img
                src="../assets/images/mountainbackground.jpg"
                alt="Picture of a mountain"
            />

            <h1>Website Version 1.0</h1>

            <ul>
                <li>Apples</li>
                <li>Mangoes</li>
                <li>Strawberries</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>

                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;