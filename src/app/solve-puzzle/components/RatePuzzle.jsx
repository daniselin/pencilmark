import {bindActionCreators} from "redux";
import {pick} from "lodash";
import {connect} from "react-redux";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {actions as solveActions} from "..";


const mapStateToProps = (state) => {
    return {
        ...pick(state.solvePuzzle, ["rating"]),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({
            setRating: solveActions.setRating,
            submitRating: solveActions.submitRating
        }, dispatch)};
};


const RatePuzzle = (props) => {

    const {
        rating,
        actions
    } = props;

    const {
        setRating,
        submitRating
    } = actions;

    return (
        <div className="justify-content-center">
            <p>Rate this puzzle?</p>
            <ReactStars onChange={(newRating) => {setRating(newRating)}} isHalf={true} size={30}/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RatePuzzle);