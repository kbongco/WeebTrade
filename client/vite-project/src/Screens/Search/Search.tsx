import Button from "../../Components/Button/Button";
import Card from "../../Components/CardInfo/CardInfo";
import './Search.scss'

export default function Search() {
  const searchLabel = 'Search'
  return ( 
    <div className='search-component-container'>
      <Card button={<Button label={searchLabel} />} input={searchLabel} />
    </div>
  )
}