import React from 'react';


const carda = () => {
    return (
        <div className="d-flex justify-content-center container text-white mt-5">
            <div className="card p-2 px-3 py-3">
                <div className="d-flex justify-content-between align-items-center">IMAGE1<br />image2</div>
                <div className="mt-3"><span className="mr-3">****</span><span className="mr-3">****</span><span className="mr-3">****</span><span className="mr-2">5513</span></div>
                <div className="d-flex justify-content-between card-details mt-3 mb-3">
                    <div className="d-flex flex-column"><span className="light">Card Holder</span><span>Sam Dingo</span></div>
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column mr-3"><span className="light">Expired</span><span>12/24</span></div>
                        <div className="d-flex flex-column"><span className="light">CVV</span><span>857</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default carda;
