import PropTypes from 'prop-types';
import { StyledOverlay, Text } from './Overlay.styled'
const Overlay = ({ text, onClick}) => <StyledOverlay onClick={onClick}>
  <Text>{text}</Text>
  
</StyledOverlay>;

Overlay.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  
}
export default Overlay;
