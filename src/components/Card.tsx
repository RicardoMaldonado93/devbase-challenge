import "styles/components/__card.scss";

export const Card = ({ avatar_url, location, name }: ICardProps) => {
  return (
    <div className="col-12 card-profile animate__animated animate__fadeIn">
      <div className="row card__border">
        <div className="col-auto">
          <img
            src={avatar_url}
            alt="profile-avatar"
            className="rounded-circle card__avatar"
          />
        </div>
        <div className="col-auto d-flex flex-column justify-content-center">
          <div className="row card__name text-start">
            <span className="capitalize">{name}</span>
          </div>
          <div className="row card__location text-start">
            <span className="capitalize">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ICardProps{
  avatar_url: string, 
  location:string, 
  name:string
}