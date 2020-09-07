import React, { useRef } from 'react';
import WithLoading from './../../HOCs/WithLoading';

const BoxWithLoader = WithLoading(props => props.children);

const CLOSE_ICON = <svg 
    height="24" 
    viewBox="0 0 21 21" 
    width="24" 
    xmlns="http://www.w3.org/2000/svg"
>
    <g 
        fill="none" 
        fillRule="evenodd" 
        stroke="#000" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        transform="translate(5 5)"
    >
        <path d="m.5 10.5 10-10"/>
        <path d="m10.5 10.5-10-10z"/>
    </g>
</svg>;
const FULL_SCREEN_ICON = <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 21 21"
>
    <g 
        fill="none" 
        fillRule="evenodd" 
        stroke="#000" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        transform="translate(2 2)"
    >
        <polyline 
            points="16.5 .522 16.5 5.5 11 5.487" 
            transform="matrix(1 0 0 -1 0 6.022)"
        />
        <line 
            x1="13.533" x2="13.467" y1="-.734" y2="7.685" 
            transform="rotate(45 13.5 3.476)"
        />
        <polyline 
            points="16.498 11.023 16.5 16.523 11 16.51" 
            transform="matrix(0 1 1 0 -.023 .023)"
        />
        <line 
            x1="13.533" x2="13.467" y1="9.266" y2="17.685" 
            transform="scale(1 -1) rotate(45 46.033 0)"
        />
        <polyline 
            points="5.75 .25 .75 .25 .75 5.75" 
            transform="matrix(0 1 1 0 .25 -.25)"
        />
        <line 
            x1="3.533" x2="3.467" y1="-.734" y2="7.685" 
            transform="scale(1 -1) rotate(45 11.891 0)"
        />
        <polyline 
            points="6 11.507 .5 11.5 .5 16.523" 
            transform="matrix(1 0 0 -1 0 28.023)"
        />
        <line 
            x1="3.5" x2="3.5" y1="9.257" y2="17.743" 
            transform="rotate(45 3.5 13.5)"
        />
    </g>
</svg>

const GridLayoutBox = props => {

    let {
        children,
        style,
        onRemove,
        widget,
        isLoading
    } = props;

    const boxRef = useRef(null);

    const handleFullScreen = () => {
        boxRef.current.requestFullscreen();
    }

    return (
        <div style={{ ...styles.container, ...style}} >
            <div className="draggableHandle" style={ styles.header }>
                <span style={ styles.label }>
                    { widget.label }
                </span>
                <div className="draggableCancel" style={ styles.buttonsWrapper }>
                    <button 
                        onClick={e => handleFullScreen(boxRef)} 
                        style={ styles.fullScreenButton }
                    >
                        { FULL_SCREEN_ICON }
                    </button>
                    <button onClick={e => onRemove(widget)}>
                        { CLOSE_ICON }
                    </button>
                </div>
            </div>
            <div ref={boxRef} style={ styles.body }>
                <BoxWithLoader isLoading={isLoading}>
                    { children }
                </BoxWithLoader>
            </div>
        </div>
    )
}

const styles = {
    container: { 
        width: '100%', 
        height: '100%', 
        background: '#fff', 
        borderRadius: 4, 
        boxShadow:  '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    header: {
        display: 'flex', 
        flex: 1, 
        padding: '0 10px 0 20px', 
        cursor: 'grab', 
        height: 48, 
        borderBottom: '1px solid #eee', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    label : { 
        fontWeight: 600 
    },
    buttonsWrapper: { 
        display: 'inline-flex', 
        alignItems: 'center' 
    },
    fullScreenButton: { 
        height: 16, 
        marginRight: 5 
    },
    body: {
        position: 'relative', 
        background: '#fff', 
        padding: 20, 
        height: "calc(100% - 49px)", 
        boxSizing: 'border-box'
    }
}

export default GridLayoutBox;