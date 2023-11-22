import { Link } from 'react-router-dom';
import React from 'react';
import BreadCrumbsComponent from '../../Interfaces/component-interface';

export default function BreadCrumbs({ breadCrumbs }: BreadCrumbsComponent) {
  return (
    <nav>
      <ul>
        {breadCrumbs.map((breadcrumb:any, index:string) => (
          <li key={index}>
            {breadcrumb.path ? (
              <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
            ) : (
              <span>{breadcrumb.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}