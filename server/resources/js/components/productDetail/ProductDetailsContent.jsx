import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import ProductDetailCard from "./ProductDetailCard";
import { ProductOpinions } from "./ProductOpinions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faStar, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faMinus, faStar, faEdit } from "@fortawesome/free-solid-svg-icons";
import { UserProfileCircle } from "../Icons";
import { intlFormatDistance, parseISO } from "date-fns";
import { OpinionInput } from "./OpinionInput";
import { useUserContext } from "@/context/userContext";
import { Link } from '@inertiajs/react';

export function ProductDetailsContent({ product, owner }) {
  const { loggedUser } = useUserContext()
  const { users, getUserByIdOwner } = useUser();
  const [formatedData, setFormatedData] = useState();
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (users.createdAt) {
      const data = intlFormatDistance(parseISO(users.createdAt), new Date());
      setFormatedData(data);
    }
  }, [users]);

  const avgRatingValue = product.avgRating.length > 0
    ? product.avgRating[0].avg_rating.replace('.', ',')
    : '0';

  useEffect(() => {
    if (owner && owner.id_owner && product.product.id_owner) {
      getUserByIdOwner({ idOwner: product.product.id_owner });
      setIsOwner(owner.id_owner === product.product.id_owner);
    }
  }, [getUserByIdOwner, owner, product.product.id_owner]);

  return (
    <div className="mt-5">
      <div className="border-bottom d-flex justify-content-between align-items-center pb-2">
        <h2 className="h2 fw-bold">{product.product.name}</h2>
        {isOwner && (
          <Link href={`/editProduct/${product.product.id_product}`} className="btn rounded-pill bg-green">
            Editatu
            <FontAwesomeIcon className="ms-3" icon={faEdit} />
          </Link>
        )}
        <div className="d-flex align-items-center">
          <span className="fs-5 me-2">{users.name}</span>
          <UserProfileCircle width={55} height={55} user={users} />
        </div>
      </div>

      <div className="mt-4">
        <ProductDetailCard product={product} />
      </div>

      <div className='row mt-5'>
        <div className='d-flex align-items-center justify-content-between border-bottom pb-2'>
          <span className='h2 fw-bold'>Iritziak</span>
          <div className="fs-3 fw-bold fst-italic text-align">
            <FontAwesomeIcon className="text-warning" icon={faStar} />
            <span className="ms-2 ">{avgRatingValue}</span>
            <FontAwesomeIcon className="ms-3" icon={faMinus} />
            <span className="ms-3 ">{product.rating.length} balorazio</span>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5 mb-4">
          <OpinionInput user={users} product={product.product} />
        </div>
        <div className="col-12">
          <ProductOpinions ratings={product.rating} />
        </div>
      </div>
    </div>
  );
}
