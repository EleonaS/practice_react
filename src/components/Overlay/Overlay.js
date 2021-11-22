import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOverlay, Text } from './Overlay.styled'
const Overlay = ({ text, onClick }) => {
  
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
  <Text>{text}</Text>
  
</StyledOverlay>);

}

Overlay.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  
}
export default Overlay;
