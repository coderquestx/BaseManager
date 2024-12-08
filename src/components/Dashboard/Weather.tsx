import React from 'react';

const Weather: React.FC = () => {
    return (
        <div className="bd bgc-white p-20">
            <div className="layers">
                <div className="layer w-100 mB-20">
                    <h6 className="lh-1">Weather</h6>
                </div>
                <div className="layer w-100">
                    <div className="peers ai-c jc-sb fxw-nw">
                        <div className="peer peer-greed">
                            <div className="layers">
                                <div className="layer w-100">
                                    <div className="peers fxw-nw ai-c">
                                        <div className="peer mR-20">
                                            <h3>32<sup>°F</sup></h3>
                                        </div>
                                        <div className="peer">
                                            <canvas className="sleet" width="44" height="44"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="layer w-100">
                                    <span className="fw-600 c-grey-600">Partly Clouds</span>
                                </div>
                            </div>
                        </div>
                        <div className="peer">
                            <div className="layers ai-fe">
                                <div className="layer">
                                    <h5 className="mB-5">Monday</h5>
                                </div>
                                <div className="layer">
                                    <span className="fw-600 c-grey-600">Nov, 01 2017</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layer w-100 mY-30">
                    <div className="layers bdB">
                        <div className="layer w-100 bdT pY-5">
                            <div className="peers ai-c jc-sb fxw-nw">
                                <div className="peer">
                                    <span>Wind</span>
                                </div>
                                <div className="peer ta-r">
                                    <span className="fw-600 c-grey-800">10km/h</span>
                                </div>
                            </div>
                        </div>
                        <div className="layer w-100 bdT pY-5">
                            <div className="peers ai-c jc-sb fxw-nw">
                                <div className="peer">
                                    <span>Sunrise</span>
                                </div>
                                <div className="peer ta-r">
                                    <span className="fw-600 c-grey-800">05:00 AM</span>
                                </div>
                            </div>
                        </div>
                        <div className="layer w-100 bdT pY-5">
                            <div className="peers ai-c jc-sb fxw-nw">
                                <div className="peer">
                                    <span>Pressure</span>
                                </div>
                                <div className="peer ta-r">
                                    <span className="fw-600 c-grey-800">1B</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layer w-100">
                    <div className="peers peers-greed ai-fs ta-c">
                        <div className="peer">
                            <h6 className="mB-10">MON</h6>
                            <canvas className="sleet" width="30" height="30"></canvas>
                            <span className="d-b fw-600">32<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                            <h6 className="mB-10">TUE</h6>
                            <canvas className="clear-day" width="30" height="30"></canvas>
                            <span className="d-b fw-600">30<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                            <h6 className="mB-10">WED</h6>
                            <canvas className="partly-cloudy-day" width="30" height="30"></canvas>
                            <span className="d-b fw-600">28<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                            <h6 className="mB-10">THR</h6>
                            <canvas className="cloudy" width="30" height="30"></canvas>
                            <span className="d-b fw-600">32<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                            <h6 className="mB-10">FRI</h6>
                            <canvas className="snow" width="30" height="30"></canvas>
                            <span className="d-b fw-600">24<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                            <h6 className="mB-10">SAT</h6>
                            <canvas className="wind" width="30" height="30"></canvas>
                            <span className="d-b fw-600">28<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                            <h6 className="mB-10">SUN</h6>
                            <canvas className="sleet" width="30" height="30"></canvas>
                            <span className="d-b fw-600">32<sup>°F</sup></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
