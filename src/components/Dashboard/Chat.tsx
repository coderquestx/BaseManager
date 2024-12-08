import React from 'react';

const Chat: React.FC = () => {
    return (
        <div className="bd bgc-white">
            <div className="layers">
                <div className="layer w-100 p-20">
                    <h6 className="lh-1">Quick Chat</h6>
                </div>
                <div className="layer w-100">
                    <div className="bgc-grey-200 p-20 gapY-15">
                        <div className="peers fxw-nw">
                            <div className="peer mR-20">
                                <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/11.jpg" alt="User" />
                            </div>
                            <div className="peer peer-greed">
                                <div className="layers ai-fs gapY-5">
                                    <div className="layer">
                                        <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                            <div className="peer mR-10">
                                                <small>10:00 AM</small>
                                            </div>
                                            <div className="peer-greed">
                                                <span>Lorem Ipsum is simply dummy text of</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layer">
                                        <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                            <div className="peer mR-10">
                                                <small>10:00 AM</small>
                                            </div>
                                            <div className="peer-greed">
                                                <span>the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layer">
                                        <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                            <div className="peer mR-10">
                                                <small>10:00 AM</small>
                                            </div>
                                            <div className="peer-greed">
                                                <span>Lorem Ipsum has been the industry's</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="peers fxw-nw ai-fe">
                            <div className="peer ord-1 mL-20">
                                <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/12.jpg" alt="User" />
                            </div>
                            <div className="peer peer-greed ord-0">
                                <div className="layers ai-fe gapY-10">
                                    <div className="layer">
                                        <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                            <div className="peer mL-10 ord-1">
                                                <small>10:00 AM</small>
                                            </div>
                                            <div className="peer-greed ord-0">
                                                <span>Hello</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layer">
                                        <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                            <div className="peer mL-10 ord-1">
                                                <small>10:00 AM</small>
                                            </div>
                                            <div className="peer-greed ord-0">
                                                <span>??</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-20 bdT bgc-white">
                        <div className="pos-r">
                            <input type="text" className="form-control bdrs-10em m-0" placeholder="Say something..." />
                            <button type="button" className="btn btn-primary bdrs-50p w-2r p-0 h-2r pos-a r-1 t-1">
                                <i className="fa fa-paper-plane-o"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
