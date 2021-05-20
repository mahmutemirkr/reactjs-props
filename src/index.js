import React from 'react';
import ReactDom from 'react-dom';

import Card from './components/Card';
import Collapse from './components/Collapse';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100">

                    <div className="col">
                        <Collapse href="collapseExample1">
                            <Card
                                cardTitle="Card Title I"
                                cardText="Lorem Ipsum Text I"
                                updatedTime="1 Min Ago"
                                image="https://picsum.photos/id/1/200/300"
                            />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card
                                cardTitle="Card Title II"
                                cardText="Lorem Ipsum Text II"
                                updatedTime="2 Min Ago"
                                image="https://picsum.photos/id/10/200/300"
                            />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample3">
                            <Card
                                cardTitle="Card Title III"
                                cardText="Lorem Ipsum Text III"
                                updatedTime="3 Min Ago"
                                image="https://picsum.photos/id/100/200/300"
                            />
                        </Collapse>
                    </div>


                </div>
            </div>
        </div>

    );
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);




