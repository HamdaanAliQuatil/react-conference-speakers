import Speaker from "./Speaker";
import { data } from "../../SpeakerData"
import { useEffect, useState } from 'react';
import ReactPlaceHolder, { REQUEST_STATUS } from "react-placeholder";

function SpeakerList({ showSessions }) {

  const {
    speakersData, requestStatus, error,
    onFavouriteToggle,
  } = useRequestSpeakers(2000)

  

  if (requestStatus === REQUEST_STATUS.FAILURE){
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
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
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