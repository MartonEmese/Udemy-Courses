import { memo } from "react";

const AgeBtn = ({handleAge}) => {

    console.log('5-Age Btn');

    return(
        <>
            <button onClick={handleAge}>
                Increment age
            </button>
        </>
    )
}

export default memo(AgeBtn);