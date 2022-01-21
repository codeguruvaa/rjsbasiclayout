import React from 'react';
import { Row,Col,Card,Button } from 'react-bootstrap';

function Cards() {
    return (
        <div>
        
        <div class="mb-5">
        <div class="row">
        <div class=" col-sm-4 col-lg-4 ">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div class="col-sm-4 col-lg-4">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div class=" col-sm-4 col-lg-4">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>

        </div>

        </div>



        </div>
    );
}

export default Cards;