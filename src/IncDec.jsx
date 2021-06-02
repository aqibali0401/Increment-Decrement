import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const IncDec = () => {

    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }
    const decNum = () => {
        if (num <= 0) {
            alert("Zero limit reached");
            setNum(0);
        }
        else {
            setNum(num - 1);
        }

    }

    return (
        <>

            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <Tooltip title="Increment">
                            <Button onClick={incNum} className="btn_green" ><AddIcon /> </Button>
                        </Tooltip>
                        <Tooltip title="Decrement">
                            <Button onClick={decNum} className="btn_red"><RemoveIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IncDec;
