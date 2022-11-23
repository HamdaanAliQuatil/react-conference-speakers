import Speaker from "./Speaker";
import { data } from "../../SpeakerData"
import { useEffect, useState } from 'react';
import ReactPlaceHolder from "react-placeholder";

function SpeakerList({ showSessions }) {

  const [speakersData, setSpeakersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(async () => {
    try{
      await delay(2000);
      setIsLoading(false)
      setSpeakersData(data);
    }
    catch(err){
      setHasErrored(true);
      setError(err.message);
      setIsLoading(false);
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

  if (hasErrored === true){
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    )
  }

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder 
        type="media"
        rows={10}
        ready={isLoading === false}
        className="speakerslist-placeholder"
      >
      <div className="row">
        {speakersData.map(function (speaker) {
          return <Speaker key={speaker.id} 
          speaker={speaker}
          showSessions={showSessions}
          onFavouriteToggle={() => {
            onFavouriteToggle(speaker.id);
            }
          }
          />;
        })}
      </div>
    </ReactPlaceHolder>
    </div>
  );
}

export default SpeakerList;