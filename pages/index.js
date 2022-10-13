import { data } from "../SpeakerData";

const IndexPage = () => {
  const { id, bio, first, last, favorite, twitterHandle, company, sessions, } = data[0];

  return (
    <div className="conatiner spaekers-list">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
          <div className="card card-height p-4 mt-4">
            <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
                <img
                  className="conatin-fit"
                  src={`/images/speakers/${id}.jpg`}
                  width="300"
                  alt={`${first} ${last}`}
                />
              <div>
                <div className="speaker-info">
                  <h3 className="text-truncate w-200">
                    {first} {last}
                  </h3>
                </div>
                <div className="speaker-company text-truncate w-200">
                  <p>{bio} {company} {twitterHandle} {favorite}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export default IndexPage;
