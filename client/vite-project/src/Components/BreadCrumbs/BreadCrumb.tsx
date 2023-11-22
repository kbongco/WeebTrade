import { Link, useLocation } from 'react-router-dom';
import BreadCrumbsComponent from '../../Interfaces/component-interface';

export default function BreadCrumbs({ breadCrumbs }: BreadCrumbsComponent) {
  const { pathname } = useLocation();
  const paths = pathname.split('/').filter((path) => path !== '');

  const breadcrumbs = paths.map((path, index) => {
    const breadcrumb = {
      label: path, // You can format the label as needed
      path: `/${paths.slice(0, index + 1).join('/')}`,
    };

    return breadcrumb;
  });

  return (
    <nav>
      <ul>
        {breadcrumbs.map((breadcrumb, index) => (
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