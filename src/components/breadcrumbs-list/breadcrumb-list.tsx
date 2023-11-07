import { Link } from 'react-router-dom';
import { BreadcrumbsListProps } from '../../types/types';

function BreadcrumbsList({id, filmTitle}:BreadcrumbsListProps){
  return(
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`/films/${id}`} className="breadcrumbs__link">{filmTitle}</Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Add review</a>
      </li>
    </ul>
  );
}

export default BreadcrumbsList;
