import Button from "../../Components/Button/Button";
import Card from "../../Components/CardInfo/CardInfo";
import './Search.scss'

export default function Search() {
  const searchLabel = 'Search'
  const buttonsGroupLabel = ['Anime', 'Year', 'Type'];
  const buttonsGroupTitle = 'Filter by'
  return ( 
      <Card button={<Button label={searchLabel} />} input= {searchLabel} buttonsGroup={buttonsGroupLabel} buttonsGroupTitle={buttonsGroupTitle} />
  )
}