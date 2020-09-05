import React from 'react';
import GridLayout from '../gridLayout/GridLayout';
import { useSelector, useDispatch } from 'react-redux';
import { updateWidgets, resetWidgets } from './../../store/actions';
import WithLoading from './../../HOCs/WithLoading';

const GridLayoutWithLoading = WithLoading(GridLayout);
const WidgetsListWithLoading = WithLoading(props => {

    const {
        items,
        onChange
    } = props;

    return (
        <>
            {
                items.map((item, idx) => {
                    return (
                        <div 
                            key={ idx } 
                            style={ styles.sideBarRow }
                        >
                            <span>{ item.label }</span>
                            <input 
                                style={{ cursor: 'pointer' }} 
                                type='checkbox' 
                                checked={ item.visible } 
                                onChange={ e => onChange(item) } 
                            />
                        </div>
                    )
                })
            }
        </>
    )
});

const Dashboard = props => {
    
    const dispatch = useDispatch();

    const widgetsData = useSelector(state => state?.widgets?.dashboard?.data);

    const updateWidgetVisibility = (widget) => {
        let widgetsDataClone = [ ...widgetsData ];
        
        let widgetIndex = widgetsDataClone.findIndex(wgt => widget.id === wgt.id);
        widgetsDataClone[widgetIndex].visible = !widget.visible;

        dispatch(updateWidgets({route: 'dashboard', data: widgetsDataClone}));
    }

    const resetLayout = () => {
        dispatch(resetWidgets({ route: 'dashboard' }));
    }
    
    return (
        <div style={ styles.container }>
            <div style={ styles.sideBar }>
                <div style={ styles.sideBarHeader }>
                    <span>Widgets Manager</span>
                    <button 
                        onClick={resetLayout} 
                        style={ styles.resetButton }
                    >RESET
                    </button>
                </div>
                <WidgetsListWithLoading 
                    items={ widgetsData } 
                    onChange={ updateWidgetVisibility }
                    isLoading={ !widgetsData }
                />
            </div>
            <div style={ styles.gridWrapper }>
                <GridLayoutWithLoading 
                    route='dashboard' 
                    items={ widgetsData }
                    onRemove={ updateWidgetVisibility }
                    isLoading={ !widgetsData }
                />
            </div>
        </div>
    )
}

const styles = {
    container: { 
        display: 'flex', 
        height: '100%', 
        width: '100%', 
        overflow: 'hidden', 
        backgroundColor: '#f5f5f5'
    },
    sideBar: { 
        height: '100%', 
        flexBasis: 320, 
        background: '#fff', 
        display: 'flex', 
        flexDirection: 'column', 
        borderRight: '1px solid #eee' 
    },
    sideBarHeader: { 
        width: '100%', 
        minHeight: 60, 
        maxHeight: 60, 
        background: '#3f51b5', 
        color: '#fff', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 20px' 
    },
    sideBarRow: { 
        width: '100%', 
        height: 50, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 20px' 
    },
    resetButton: { 
        background: '#fff', 
        fontSize: 12, 
        padding: '3px 6px', 
        borderRadius: 2 
    },
    gridWrapper: { 
        flex: 1, 
        width: '100%',
        overflowY: 'auto' 
    }
}

export default Dashboard;