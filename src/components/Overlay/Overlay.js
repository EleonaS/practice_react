import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOverlay } from './Overlay.styled'
const Overlay = ({ img, onClick }) => {
  
  useEffect(() => {
    window.addEventListener('keydown', overlayClose);
    return ()=>{window.addEventListener('keydown', overlayClose);}
})


  const overlayClose = ({keyCode}) => {
    if (keyCode === 27) {
     onClick()
   }
  }
  return (
  <StyledOverlay onClick={onClick}>
  <img src={`https://image.tmdb.org/t/p/w780/${img}`} alt=""/>
  
</StyledOverlay>);

}

Overlay.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  
}
export default Overlay;
