import { useUser } from "@/hooks/useUser";
import { UserProfileCircle } from "../Icons";
import RatingStars from 'react-rating-stars-component';
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { getUserDetailsByIdUserService } from "@/service/users";

export const ProductOpinionCard = ({rating}) => {
  const {userDetails, getUserDetailsByIdUser} = useUser()
  const [showFullText, setShowFullText] = useState(rating.review.length <= 200);
  const [readMoreText, setReadMoreText] = useState("Gehiago irakurri");


  useEffect(() => {
    getUserDetailsByIdUser({idUser: rating.id_user})
  }, [rating])

  const formattedDate = format(new Date(rating.created_at), 'yyyy/MM/dd', { awareOfUnicodeTokens: true });

  const toggleText = () => {
    setShowFullText(!showFullText);
    setReadMoreText((prevText) => (prevText === "Gehiago irakurri" ? "Gutxiago irakurri" : "Gehiago irakurri"));
  };

  return (
    <div className="row bg-light p-4 rounded-5">
      <div className="col-lg-3 col-12 mb-3 mb-md-0">
        <div className="d-flex align-items-center">
          <UserProfileCircle imageUrl={userDetails.profileImage} width={65} height={65}/>
          <div className="ms-3 d-flex flex-column">
            <span className="mb-1 fs-5">{userDetails.name}</span>
            <em>{userDetails.city}, {userDetails.country}</em>
          </div>
        </div>
        
        <div className="d-flex align-items-center mt-2">
          <RatingStars
            value={rating.rating}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
          <span className="fst-italic text-secondary ms-2 pt-1">{formattedDate}</span>
        </div>
      </div>

      <div className="col-md-9 col-12">
        <h3 className="fw-bold">{rating.title}</h3>
        {showFullText ? (
          <>
            <p className="fs-5 mt-3">{rating.review}</p>
            {readMoreText === 'Gutxiago irakurri' && (
              <span
                className="text-dark fw-bold nav-icons fst-italic fs-5"
                style={{ cursor: 'pointer' }}
                onClick={toggleText}
              >
              {readMoreText}
            </span>
            )}
          </>
          
        ) : (
          <p className="fs-5 mt-3">{`${rating.review.slice(0, 200)}... `}
            <span
              className="text-dark fw-bold nav-icons fst-italic"
              style={{ cursor: 'pointer' }}
              onClick={toggleText}
            >
              {readMoreText}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
