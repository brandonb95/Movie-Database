import {ReactComponent as HeartEmpty} from '../../scss/Favourite-Unselected.svg';
import {ReactComponent as HeartFill} from '../../scss/Selected-Favourite.svg';

const FaveBtn = ({ movie, handleFaveClick, isFave }) => {


  const handleAddFave = () => {
    handleFaveClick(true, movie);
  }

  const handleRemoveFave = () => { 
    handleFaveClick(false, movie);
  }

  return (
    <div className="fave-btn">
      { isFave === true ?
        <div title="Remove from favourites">
          <button style={{width:'100%'}}onClick={handleRemoveFave}><HeartFill/>
        </button>
        </div>
        :
        <div title="Add to favourites">
          <button style={{width:'100%'}}onClick={handleAddFave}><HeartEmpty/></button>
        </div>
      }
    </div>
  );
};

FaveBtn.defaultProps = {
  remove: false
}

export default FaveBtn;