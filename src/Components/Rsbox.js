import React from 'react';
import './Style.css';

function Rsbox() {
    return (
        <div>

            <div className='rbox'>

                <div class="border border-dark p-5 shadow-lg p-3 mb-5 bg-body rounded-3" >
                    <h3 class="display-6">Feedback form</h3>

                    user name : <input type="text" /> <br />
                    User Mob : <input type="number" /> <br />
                    User EMail : <input type="email" /> <br />
                    <br />
                    <button>Submit</button>
                </div>


            </div>


        </div>
    );
}

export default Rsbox;