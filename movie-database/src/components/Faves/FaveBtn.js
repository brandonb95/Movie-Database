import {ReactComponent as HeartEmpty} from '../../scss/Favourite-Unselected.svg';
import {ReactComponent as HeartFill} from '../../scss/Selected-Favourite.svg';

import '../../scss/styles.scss';

const FaveBtn = ({ movie, handleFaveClick, isFave }) => {


  const handleAddFave = () => {
    handleFaveClick(true, movie);
  }

  const handleRemoveFave = () => { 
    handleFaveClick(false, movie);
  }

  return (
    <div>
      { isFave === true ?
        <div title="Remove from favourites">
          <button className="movie-favourite"onClick={handleRemoveFave}><HeartFill/>
        </button>
        </div>
        :
        <div title="Add to favourites">
          <button className="movie-favourite" onClick={handleAddFave}><HeartEmpty/>
          </button>
        </div>
      }
    </div>
  );
};

FaveBtn.defaultProps = {
  remove: false
}

export default FaveBtn;