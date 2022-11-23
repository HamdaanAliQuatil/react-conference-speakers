import { data } from "../../SpeakerData";
import { useEffect, useState } from "react";


// create a custom hook to handle the request for speakers data
const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
};

function useRequestSpeakers(delayAmount = 1000) {
    const [speakersData, setSpeakersData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    useEffect(async () => {
    try{
        await delay(delayAmount);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setSpeakersData(data);
    }
    catch(err){
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(err.message);
    }
    }, []);

    function onFavouriteToggle(id){
    const speakersRecPrevious = speakersData.find(function (rec) {{
        return rec.id === id;
    }});
    const speakerRecUpdated = {
        ...speakersRecPrevious,
        favorite: !speakersRecPrevious.favorite
    }
    const speakersDataUpdated = speakersData.map(function (rec) {
        return rec.id === id ? speakerRecUpdated : rec;
    }
    );

    setSpeakersData(speakersDataUpdated);
    }

    return {
        speakersData, requestStatus, error,
        onFavouriteToggle,
    };
}

export default useRequestSpeakers;