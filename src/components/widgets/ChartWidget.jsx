import React, { useEffect, useState } from 'react';
import WidgetBox from '../gridLayout/GridLayoutBox';
import Chart from '../charts/Chart';
import requestHandler from './../../utils/requestHandler';
 
const LOADER = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 38 38" stroke="#a5b0b5">
    <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>;

const ChartWidget = props => {

    const [dataPoints, setDataPoints] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { 
        widget,
        ...rest
    } = props;

    useEffect(() => {
        setIsLoading(true);
        requestHandler(widget.props.request)
            .then(res => {
                setDataPoints(res.data)
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            })
            
    }, [])

    const renderNoResults = () => (
        <div style={ styles.container }>
            <span style={ styles.label }>No Data</span>
        </div>
    )

    const renderLoader = () => (
        <div style={ styles.container }>
            { LOADER }
        </div>
    )

    const options = {
        data: [{
            dataPoints,
            ...widget.props.chartOptions
        }]
    }
    
    return (
        <WidgetBox widget={ widget } { ...rest }>
            {
                isLoading ?
                    renderLoader()
                    :
                    dataPoints.length ?
                        <Chart options={options} />
                        :
                        renderNoResults()
            }
        </WidgetBox>
    );
}

const styles = {
    container: {
        display: 'flex', 
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    label: { 
        fontSize: 50, 
        color: '#bbb' 
    }
}
 
export default ChartWidget;    