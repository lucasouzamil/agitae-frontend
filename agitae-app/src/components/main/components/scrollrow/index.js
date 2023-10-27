import React, { useState, useEffect } from "react";
import './scrollrow.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ScrollRow(props) {
    const [scrollX, setScrollX] = useState(0);
    const [widthItem, setItemWidth] = useState(null);
    const [nItens, setNItens] = useState(null);
    const [widthScrollViewArea, setWidthScrollViewArea] = useState(null);

    useEffect(() => {
        const [widthitem, nitems, widthscrollviewArea] = calcSizeItemList();
        setItemWidth(widthitem);
        setNItens(nitems);
        setWidthScrollViewArea(widthscrollviewArea);
    }, []);

    const calcSizeItemList = () => {
        const item = document.getElementById("0");
        const itensList = document.getElementById("item--list");
        const scrollRowListArea = document.getElementById("scrollRow--listarea");
        if (item && itensList) {
            const widthItem = item.offsetWidth;
            const qntdItens = itensList.childElementCount;
            const widthScrollRowViewArea = scrollRowListArea.offsetWidth;
            return [widthItem, qntdItens, widthScrollRowViewArea];
        }
        return [null, null, null];
    };

    const handleLeftArrow = () => {
        let x = Math.round(scrollX + widthItem);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(widthItem);
        let listW = nItens * widthItem;
        console.log(Math.abs(widthScrollViewArea - listW) + ' > ' + Math.abs(x));
        if (Math.abs(widthScrollViewArea - listW) < Math.abs(x)) {
            x = (widthScrollViewArea - listW);
        }
        setScrollX(x);
    };

    const changeMe = (event) => {
        const selectedId = event.currentTarget.id;
        console.log(typeof(selectedId));
        for (let i = 0; i <= (nItens - 1); i++) {
            let item = document.getElementById(i);
            if (i.toString() === selectedId){
                item.setAttribute('selected-item', 'true');
            } else{
                item.setAttribute('selected-item', 'false');
            }
        }
    };

    return (
        <div className="scrollRow">
            <div className="scrollRow-left" onClick={handleLeftArrow}>
                <KeyboardArrowLeftIcon className="iconeScrollLeft" style={{ fontSize: 50 }}></KeyboardArrowLeftIcon>
            </div>
            <div className="scrollRow--listarea" id="scrollRow--listarea">
                <div className="scrollRow--list" style={{ marginLeft: scrollX }}>
                    <div className="item--list" id="item--list">
                        <div className="item" id="0" selected-item='false' onClick={changeMe}>
                            <div className="teste">0</div>
                        </div>
                        <div className="item" id="1" selected-item='false' onClick={changeMe}>
                            <div className="teste">1</div>
                        </div>
                        <div className="item" id="2" selected-item='false' onClick={changeMe}>
                            <div className="teste">2</div>
                        </div>
                        <div className="item" id="3" selected-item='false' onClick={changeMe}>
                            <div className="teste">3</div>
                        </div>
                        <div className="item" id="4" selected-item='false' onClick={changeMe}>
                            <div className="teste">4</div>
                        </div>
                        <div className="item" id="5" selected-item='false' onClick={changeMe}>
                            <div className="teste">5</div>
                        </div>
                        <div className="item" id="6" selected-item='false' onClick={changeMe}>
                            <div className="teste">6</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scrollRow-left" onClick={handleRightArrow}>
                <KeyboardArrowRightIcon className="iconeScrollRight" style={{ fontSize: 50 }}></KeyboardArrowRightIcon>
            </div>
        </div>
    );
}
