import { useEffect, useState } from "react";


// create a custom hook to handle the request for speakers data
export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function useRequestDelay(delayAmount = 1000, initialData=[]) {
    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    useEffect(async () => {
    try{
        await delay(delayAmount);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
    }
    catch(err){
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(err.message);
    }
    }, []);

   function updateRecord(recordUpdated){
        const newRecords = data.map((rec) => {
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });
        
        async function delayFunction(){
        try{    await delay(delayTime);
            setData(newRecords);
            }
        catch(err){
            setError(err.message);
            setRequestStatus(REQUEST_STATUS.FAILURE);
        }

        delayFunction();

    }
   }

    return {
        data, requestStatus, error,
        updateRecord,
    };
}

export default useRequestDelay;