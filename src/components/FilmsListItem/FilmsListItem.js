import PropTypes from 'prop-types';
import { Title } from './FilmsListItem.styled';
import {Label } from '../Overlay/Overlay.styled'
const FilmsListItem = ({  title, img, id, isWatched,onClick, text, onStatusClick }) =>
  (<>
    <img src={`https://image.tmdb.org/t/p/w400/${img}`} alt={title} />
  <Title>{title}</Title>
  <button type="button" onClick={() => onClick(text) }>Read overview</button>
  <p onClick={()=>onStatusClick(id)}>Is movie watched:<Label>{`${isWatched}`}</Label></p>
</>);

FilmsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
  isWatched: PropTypes.bool.isRequired,
  onStatusClick: PropTypes.func.isRequired,
  
}

export default FilmsListItem;