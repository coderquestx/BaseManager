import React, { useState } from 'react';
import LeafletMap from './LeafletMap';

const NuclearMap = () => {
    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMarkerSelect = (info) => {
        setSelectedMarker(info);
    };

    return (
        <div className="masonry-item col-12">
            <div className="bd bgc-white">
                <div className="peers fxw-nw@lg+ ai-s">
                    <div className="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                        <div className="layers">
                            <div className="layer w-100 mB-10">
                                <h6 className="lh-1">Plant Map</h6>
                            </div>
                            <div className="layer w-100" style={{ height: '500px' }}>
                                <LeafletMap onMarkerSelect={handleMarkerSelect} />
                            </div>
                        </div>
                    </div>
                    <div className="peer bdL p-20 w-30p@lg+ w-100p@lg-">
                        <div className="layers">
                            <div className="layer w-100">
                                {selectedMarker ? (
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">{selectedMarker.name}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p>{selectedMarker.description}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuclearMap;
