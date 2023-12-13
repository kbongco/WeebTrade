import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumb"

export default function FiguresCatalog(props) { 


  const breadcrumbData = [
    { label: 'Home', path: '/' },
    {label: 'Figures', path:'/browse/figures'}
  ]
  return (
    <>
      <BreadCrumbs breadCrumbs={breadcrumbData} />
      <div className='browse-figures-container'>
      <h1>Browse Figures</h1>
      </div>
  </>)
}