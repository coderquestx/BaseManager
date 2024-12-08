import React from 'react';

const MilitaryBaseAmount: React.FC = () => {
    return (
        <div className="col-md-3">
            <div className="layers bd bgc-white p-20">
                <div className="layer w-100 mB-10">
                    <h6 className="lh-1"></h6>
                </div>
                <div className="layer w-100">
                    <div className="peers ai-sb fxw-nw">
                        <div className="peer peer-greed">
                            <span id="sparklinedash4"></span>
                        </div>
                        <div className="peer">
                            <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">50</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilitaryBaseAmount;
