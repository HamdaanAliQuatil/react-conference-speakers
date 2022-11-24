import Speaker from "./Speaker";
import { data } from "../../SpeakerData"
import { useEffect, useState } from 'react';
import ReactPlaceHolder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from '../hooks/useRequestDelay';

function SpeakerList({ showSessions }) {

  const {
    data: speakersData, requestStatus, error,
    updateRecord,
  } = useRequestDelay(2000, data)

  

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
            updateRecord({
              ...speaker,
              favourite: !speaker.favourite,
              });
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