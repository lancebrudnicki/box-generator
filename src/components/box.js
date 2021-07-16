import React, { useState } from 'react';
import './styles.css';

    const BoxForm = (props) => {
        const [box, setBox] = useState('');
        const [boxes, setBoxes] = useState([]);
        const [size, setSize] = useState('')
    

    const makeBox = (e) =>{
        e.preventDefault();
        let size = e.target.height.value
        setSize(size)
        let box = e.target.color.value
        setBox(box)
        boxes.push({
            box:box,
            size:size
        })
        console.log(boxes)
    }


    return(
        <div >
            <form onSubmit={ (makeBox) }>
                color: 
                <input name="color"></input>
                height:
                <input name="height"></input>
                <button>add</button>
            </form>
            <div className='main' style={{display: 'flex'}} >
            {boxes.map((box) => <div className="box2" style={{ backgroundColor: box.box, width: box.size+'px', height: box.size+"px", display: 'flex'}}></div>)
            }
            </div>
        </div>
        )
    }




export default BoxForm;