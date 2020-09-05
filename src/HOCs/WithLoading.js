import React from 'react';

const LOADER = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 38 38" stroke="#3f51b5">
    <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>;

const WithLoading = (Component) => {

    return function WihLoadingComponent({ isLoading, ...props }) {

        if (!isLoading) return (<Component {...props} />);

        return <div style={ styles.container }>{ LOADER }</div>;
    }

}

const styles = {
    container: {
        display: 'flex', 
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
}

export default WithLoading;