import PropTypes from 'prop-types';
import { Title } from './FilmsListItem.styled';
import { Label } from '../Overlay/Overlay.styled'
import { Link,useRouteMatch } from 'react-router-dom';


const FilmsListItem = ({ title, img, id, isWatched, onClick, text, onStatusClick }) => {

  const { url } = useRouteMatch()

  return (
    <>
    <img src={`https://image.tmdb.org/t/p/w400/${img}`} alt={title} onClick={() => onClick(img) }/>
  <Title>{title}</Title>
  <Link to={`${url}/${id}`}>About film</Link>
  <p onClick={()=>onStatusClick(id)}>Is movie watched:<Label>{`${isWatched}`}</Label></p>
</>)
}
  
  ;

FilmsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
  isWatched: PropTypes.bool.isRequired,
  onStatusClick: PropTypes.func.isRequired,
  
}

export default FilmsListItem;