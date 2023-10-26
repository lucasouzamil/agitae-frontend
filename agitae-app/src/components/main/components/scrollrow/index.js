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
        const item = document.getElementById("teste");
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


    console.log('');

    const handleLeftArrow = () => {
        if (scrollX + widthItem > 0) {
            setScrollX(scrollX);
        } else (
            setScrollX(scrollX + widthItem)
        );
        console.log('Margem: ' + scrollX + ' Largura total: ' + (nItens * widthItem));
    };

    const handleRightArrow = () => {
        if (Math.abs(scrollX + widthItem) > ((nItens * widthItem) - widthScrollViewArea)) {
            setScrollX(scrollX);
        } else (
            setScrollX(scrollX - widthItem)
        );
        console.log('Margem: ' + Math.abs(scrollX+widthItem) + ' Largura:' + ((nItens * widthItem) - widthScrollViewArea));
    };

    return (
        <div className="scrollRow">
            <div className="scrollRow-left" onClick={handleLeftArrow}>
                <KeyboardArrowLeftIcon className="iconeScrollLeft" style={{ fontSize: 50 }}></KeyboardArrowLeftIcon>
            </div>
            <div className="scrollRow--listarea" id="scrollRow--listarea">
                <div className="scrollRow--list" style={{ marginLeft: scrollX }}>
                    <div className="item--list" id="item--list">
                        <div className="item" id="teste"><div className="teste">1</div></div>
                        <div className="item"><div className="teste">2</div></div>
                        <div className="item"><div className="teste">3</div></div>
                        <div className="item"><div className="teste">4</div></div>
                        <div className="item"><div className="teste">5</div></div>
                        <div className="item"><div className="teste">6</div></div>
                        <div className="item"><div className="teste">7</div></div>
                    </div>
                </div>
            </div>
            <div className="scrollRow-left" onClick={handleRightArrow}>
                <KeyboardArrowRightIcon className="iconeScrollRight" style={{ fontSize: 50 }}></KeyboardArrowRightIcon>
            </div>
        </div>
    );
}
