import { Link, useLocation } from 'react-router-dom';
import BreadCrumbsComponent from '../../Interfaces/component-interface';
import './BreadCrumb.scss'

export default function BreadCrumbs({ breadCrumbs }: BreadCrumbsComponent) {

  const breadcrumbs = breadCrumbs.map((breadcrumb:any, index:number) => {
    const label =
      breadcrumb.label === 'Series' && index === breadCrumbs.length - 1
        ? breadcrumb.label
        : breadcrumb.label || ''; 
  
    const path = breadcrumb.path || '';
  
    return {
      label,
      path,
    };
  });


  return (
    <nav className='breadcrumbs-container'>
      <ul className='breadcrumbs-list'>
        {breadcrumbs.map((breadcrumb:any, index:number) => (
          <li key={index}>
            {breadcrumb.path ? (
              <Link className='bread-crumb-links' to={breadcrumb.path}> {breadcrumb.label} / </Link>
            ) : (
              <span> {breadcrumb.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}