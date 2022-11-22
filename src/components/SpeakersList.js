import Speaker from "./Speaker";
import { data } from "../../SpeakerData"
import { useState } from 'react';

function SpeakerList({ showSessions }) {

  const [speakersData, setSpeakersData] = useState(data);

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

  return (
    <div className="container speakers-list">
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
    </div>
  );
}

export default SpeakerList;