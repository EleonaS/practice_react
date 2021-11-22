import { StyledButton } from './Button.styled'

const Button = ({ onClick }) => (
    <StyledButton type="button" onClick={onClick}>
        Load more
    </StyledButton>
);
export default Button;