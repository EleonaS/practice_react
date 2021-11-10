import PropTypes from 'prop-types';
import FilmsListItem from '../FilmsListItem/FilmsListItem';
import { StyledList } from './FilmsList.styled';
import { ListItem } from '../FilmsListItem/FilmsListItem.styled';

const FilmsList = ({ movies, onClick, onStatusClick  }) => (
    <StyledList>
        {movies.map(({ id, title, img, text,isWatched }) => (
          <ListItem key={id} >
                <FilmsListItem
                    id={id}
                    title={title}
              img={img}
              isWatched={isWatched}
              text={text}
              onClick={onClick}
              onStatusClick={onStatusClick}
                    
                />
            </ListItem>
        ))}
    </StyledList>
);

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,

    }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  onStatusClick: PropTypes.func.isRequired,
};
export default FilmsList;