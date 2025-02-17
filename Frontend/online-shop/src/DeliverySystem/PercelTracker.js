import React, {useState} from "react";
//import axios from "react-router-dom";

const PercelTracker = () => {
    const [carrier, setCarrier] = useState("");
    const [trackingNumber, setTrackingNumber] = useState("");
    const [trackingInfo, setTrackingInfo] = useState(null);
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/track/${carrier}/${trackingNumber}/`);
            const data = await response.json();

            if (response.ok){
                setTrackingInfo(data);
                setError("");
            } else {
                setError(data.error || "Unable to fetch tracking info");
                setTrackingInfo(null);
            }
        } catch (err) {
            setError("An error occurred:" + err.message);
            setTrackingInfo(null);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Track Your Parcel</h1>
            <form onsubmit={handleSubmit}>
                <div>
                    <input
                    type="text"
                    value={carrier}
                    onChange={(e) => setCarrier(e.target.value)}
                    placeholder="Carrier (e.g., dhl)"
                    required
                    style={{ marginRight: "10px"}}
                    />
                    <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Tracking Number"
                    required
                    style={{ marginRight: "10px" }}
                    />
                    <button type="submit">Track</button> 
                    </div>
            </form>


            <h3>Tracking Information:</h3>
            {error && <p style={{ color: "red"}}>{error}</p>}
            {trackingInfo ? (
                <pre>{JSON.stringify(trackingInfo, null, 2)}</pre>
            ) : (
                <p>No trackking info available.</p>
            )}
        </div>
    );
};


export default PercelTracker;