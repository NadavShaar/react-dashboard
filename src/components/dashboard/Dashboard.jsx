import React from 'react';
import GridLayout from '../gridLayout/GridLayout';
import { useSelector, useDispatch } from 'react-redux';
import { updateWidgets, resetWidgets } from './../../store/actions';

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
                {
                    widgetsData ?
                        widgetsData.map((widget, idx) => {
                            return (
                                <div 
                                    key={idx} 
                                    style={ styles.sideBarRow }
                                >
                                    <span>{ widget.label }</span>
                                    <input 
                                        style={{ cursor: 'pointer' }} 
                                        type='checkbox' 
                                        checked={widget.visible} 
                                        onChange={e => updateWidgetVisibility(widget)} 
                                    />
                                </div>
                            )
                        })
                        :
                        null
                }
            </div>
            <div style={ styles.gridWrapper }>
                {
                    (widgetsData) ? 
                        <GridLayout 
                            route='dashboard' 
                            items={widgetsData}
                            onRemove={updateWidgetVisibility}
                        />
                        : null
                }
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
        flexBasis: 350, 
        background: '#fff', 
        display: 'flex', 
        flexDirection: 'column', 
        borderRight: '1px solid #eee' 
    },
    sideBarHeader: { 
        width: '100%', 
        height: 60, 
        background: '#3f51b5', 
        color: '#fff', 
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
    sideBarRow: { 
        width: '100%', 
        height: 50, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 20px' 
    },
    gridWrapper: { 
        flex: 1, 
        overflowY: 'auto' 
    }
}

export default Dashboard;