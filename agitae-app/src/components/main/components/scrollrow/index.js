import React, { useState, useEffect } from "react";
import './scrollrow.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EventType from "../eventType";

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
        const itensList = document.getElementById(`item--list-${props.scrollId}`);
        const item = itensList.firstElementChild;
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

    /* const changeMe = (event) => {
        const selectedId = event.currentTarget.id;
        console.log(typeof (selectedId));
        for (let i = 0; i <= (nItens - 1); i++) {
            let item = document.getElementById(i);
            if (item) {
                if (i.toString() === selectedId) {
                    item.setAttribute('selected-item', 'true');
                } else {
                    item.setAttribute('selected-item', 'false');
                }
            }
        }
    }; */

    const changeMe = (event) => {
        const selectedId = event.currentTarget.id;
        const dadElement = document.getElementById(`item--list-${props.scrollId}`);
        const childElements = dadElement.children;
        for (let i = 0; i < childElements.length; i++) {
            const childElement = childElements[i];
            console.log(childElement.id + ' ' + selectedId);
            if (childElement.id === selectedId) {
                childElement.setAttribute('selected-item', 'true');
            } else {
                childElement.setAttribute('selected-item', 'false');
            }
        }
        console.log('');
};



return (
    <div className="scrollRow">
        <div className="scrollRow-left" onClick={handleLeftArrow}>
            <KeyboardArrowLeftIcon className="iconeScrollLeft" style={{ fontSize: 50 }}></KeyboardArrowLeftIcon>
        </div>
        <div className="scrollRow--listarea" id="scrollRow--listarea">
            <div className="scrollRow--list" style={{ marginLeft: scrollX }}>
                <div className="item--list" id={`item--list-${props.scrollId}`}>
                    <div className="item" id={`scrollRow-${props.scrollId}-0`} selected-item='true' onClick={changeMe}>
                        <EventType name='Todos'></EventType>
                    </div>
                    <div className="item" id={`scrollRow-${props.scrollId}-1`} selected-item='false' onClick={changeMe}>
                        <EventType name='Música'></EventType>
                    </div>
                    <div className="item" id={`scrollRow-${props.scrollId}-2`} selected-item='false' onClick={changeMe}>
                        <EventType name='Culinária'></EventType>
                    </div>
                    <div className="item" id={`scrollRow-${props.scrollId}-3`} selected-item='false' onClick={changeMe}>
                        <EventType name='Cultural'></EventType>
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
