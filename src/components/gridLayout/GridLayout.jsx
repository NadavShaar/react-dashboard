import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
require('./../../../node_modules/react-grid-layout/css/styles.css');
require('./../../../node_modules/react-resizable/css/styles.css');
import Widgets from '../widgets';
import { useDispatch } from 'react-redux';
import { updateWidgets } from '../../store/actions';

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout = props => {

    const { items, route, onRemove } = props;

    const dispatch = useDispatch();

    const layouts = {lg: [], md: [], sm: [], xs: [], xxs: []};
    items.forEach(wd => Object.keys(wd.layouts).forEach(k => { if(wd.visible && wd.layouts[k]) layouts[k].push(wd.layouts[k]) }));
    let visibleWidgets = items.filter(widget => widget.visible !== false);
    
    const onLayoutChange = (currentLayout, allLayouts) => {
        let updatedItems = [ ...items ].map((item, idx) => {
            return {
                ...item,
                layouts: Object.assign(...Object.keys(layouts).map(k => ( { [k]: ((allLayouts[k].find(l => l.i === item.id)) || item.layouts[k]) } )))
            }
        })
        dispatch(updateWidgets({route, data: updatedItems}))
    }

    return (
        <ResponsiveGridLayout 
            className="layout" 
            layouts={layouts}
            // verticalCompact={false}
            onLayoutChange={onLayoutChange}
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            containerPadding={[20, 20]}
            margin={[20, 20]}
            draggableHandle='.draggableHandle'
            style={{ minHeight: '100%' }}
        >
            {
                visibleWidgets.map((item, idx) => {
                    return <div key={item.id}>
                        { React.createElement(Widgets[item.component], { widget: item, onRemove }) }
                    </div>
                })
            }
        </ResponsiveGridLayout>
    )
}

export default GridLayout;