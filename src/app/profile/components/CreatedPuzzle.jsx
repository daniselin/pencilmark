import React from "react";
import {connect} from "react-redux";
import {formatDate} from "../../utils/utils";
import SmallGrid from "../../SmallGrid";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CreatedPuzzle = (props) => {
    const {
        puzzle
    } = props;

    // const [width, setWidth] = useState("");
    //
    // const createdPuzzleRef = useRef(null);
    // useEffect(() => {
    //     setWidth(createdPuzzleRef.current.offsetWidth);
    //     console.log('created puzzle width', width);
    // }, [createdPuzzleRef]);

    return(
        <div className='card justify-content-center mb-4'>
            <div className='card-header'>
                {puzzle["name"]}
            </div>
            <div className='containter-fluid card-body justify-content-center'>
                <SmallGrid cells={puzzle["given_digits"]}/>
            </div>
            <div className='card-footer'>
                {formatDate(puzzle["date"])}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedPuzzle);