import Button from "../../Components/Button/Button";
import Card from "../../Components/CardInfo/CardInfo";
import { InputStyle } from "../../enums/component-enums";
import './Search.scss'

export default function Search() {
  const searchLabel = 'Search'
  const buttonsGroupLabel = ['Anime', 'Year', 'Type'];
  const buttonsGroupTitle = 'Filter by'
  const styles = InputStyle.searchStyle;

  return ( 
    <Card button={<Button label={searchLabel} />} input={searchLabel} buttonsGroup={buttonsGroupLabel} buttonsGroupTitle={buttonsGroupTitle} inputStyle={styles} />
  )
}