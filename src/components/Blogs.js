import React from 'react';

const Blogs = () => {
    return (
        <div style={{ padding: '0 2em 2em' }}>
            <h4>Difference between authorization and authentication?</h4>
            <p>
                Authorization is checking if the user is allowed to do what he's
                trying to do. <br />
                Authentication is valiading an user himself.
            </p>
            <h4>
                Why are you using firebase? What other options do you have to
                implement authentication?
            </h4>
            <p>
                Firebase gives us the tools necessary to implement an
                authentication system without managing a lot of things ourselves
                like user database etc.
            </p>
            <h4>
                What other services does firebase provide other than
                authentication
            </h4>
            <p>Hosting, Database etc.</p>
        </div>
    );
};

export default Blogs;
