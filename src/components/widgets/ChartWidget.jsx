import React, { useEffect, useState } from 'react';
import WidgetBox from '../gridLayout/GridLayoutBox';
import Chart from '../charts/Chart';
import requestHandler from './../../utils/requestHandler';

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

    const options = {
        data: [{
            dataPoints,
            ...widget.props.chartOptions
        }]
    }
    
    return (
        <WidgetBox widget={ widget } isLoading={isLoading} { ...rest }>
            {
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