const dashboardWidgets = [
    {
        id: 'a', 
        label: 'Widget - 1',
        component: 'chartWidget',
        visible: true,
        props: {
            chartOptions: {
                type: 'column'
            },
            request: {
                action: 'getWidgetData'
            }
        },
        layouts: {
            lg: {i: 'a', x: 0, y: 0, w: 6, h: 4, "moved": false, "static": false},
            md: {i: 'a', x: 0, y: 0, w: 5, h: 3, "moved": false, "static": false},
            sm: {i: 'a', x: 0, y: 0, w: 6, h: 3, "moved": false, "static": false},
            xs: {i: 'a', x: 0, y: 0, w: 4, h: 3, "moved": false, "static": false},
            xxs: {i: 'a', x: 0, y: 0, w: 2, h: 2, "moved": false, "static": false}
        }
    },
    {
        id: 'b', 
        label: 'Widget - 2',
        component: 'chartWidget',
        visible: true,
        props: {
            chartOptions: {
                type: 'pie'
            },
            request: {
                action: 'getWidgetData'
            }
        }, 
        layouts: {
            lg: {i: 'b', x: 6, y: 0, w: 6, h: 4, "moved": false, "static": false},
            md: {i: 'b', x: 5, y: 0, w: 5, h: 3, "moved": false, "static": false},
            sm: {i: 'b', x: 0, y: 3, w: 6, h: 3, "moved": false, "static": false},
            xs: {i: 'b', x: 0, y: 3, w: 4, h: 3, "moved": false, "static": false},
            xxs: {i: 'b', x: 0, y: 2, w: 2, h: 2, "moved": false, "static": false}
        }
    },
    {
        id: 'c', 
        label: 'Widget - 3',
        component: 'chartWidget',
        visible: false, 
        props: {
            chartOptions: {
                type: 'scatter'
            },
            request: {
                action: 'getWidgetData'
            }
        },
        layouts: {
            lg: {i: 'c', x: 0, y: 4, w: 6, h: 4, "moved": false, "static": false},
            md: {i: 'c', x: 0, y: 3, w: 5, h: 3, "moved": false, "static": false},
            sm: {i: 'c', x: 0, y: 6, w: 6, h: 3, "moved": false, "static": false},
            xs: {i: 'c', x: 0, y: 6, w: 4, h: 3, "moved": false, "static": false},
            xxs: {i: 'c', x: 0, y: 4, w: 2, h: 2, "moved": false, "static": false}
        }
    },
    {
        id: 'd', 
        label: 'Widget - 4',
        component: 'chartWidget',
        visible: true, 
        props: {
            chartOptions: {
                type: 'area'
            },
            request: {
                action: 'getWidgetData'
            }
        },
        layouts: {
            lg: {i: 'd', x: 6, y: 4, w: 6, h: 4, "moved": false, "static": false},
            md: {i: 'd', x: 5, y: 3, w: 5, h: 3, "moved": false, "static": false},
            sm: {i: 'd', x: 0, y: 9, w: 6, h: 3, "moved": false, "static": false},
            xs: {i: 'd', x: 0, y: 9, w: 4, h: 3, "moved": false, "static": false},
            xxs: {i: 'd', x: 0, y: 6, w: 2, h: 2, "moved": false, "static": false}
        }
    },
    {
        id: 'e', 
        label: 'Widget - 5',
        component: 'chartWidget',
        visible: true, 
        props: {
            chartOptions: {
                type: 'line'
            },
            request: {
                action: 'getWidgetData'
            }
        },
        layouts: {
            lg: {i: 'e', x: 0, y: 8, w: 6, h: 4, "moved": false, "static": false},
            md: {i: 'e', x: 0, y: 6, w: 5, h: 3, "moved": false, "static": false},
            sm: {i: 'e', x: 0, y: 12, w: 6, h: 3, "moved": false, "static": false},
            xs: {i: 'e', x: 0, y: 12, w: 4, h: 3, "moved": false, "static": false},
            xxs: {i: 'e', x: 0, y: 8, w: 2, h: 2, "moved": false, "static": false}
        }
    },
    {
        id: 'f', 
        label: 'Widget - 6',
        component: 'chartWidget',
        visible: false, 
        props: {
            chartOptions: {
                type: 'funnel'
            },
            request: {
                action: 'getWidgetData'
            }
        },
        layouts: {
            lg: {i: 'f', x: 6, y: 8, w: 6, h: 4, "moved": false, "static": false},
            md: {i: 'f', x: 5, y: 6, w: 5, h: 3, "moved": false, "static": false},
            sm: {i: 'f', x: 0, y: 15, w: 6, h: 3, "moved": false, "static": false},
            xs: {i: 'f', x: 0, y: 15, w: 4, h: 3, "moved": false, "static": false},
            xxs: {i: 'f', x: 0, y: 10, w: 2, h: 2, "moved": false, "static": false}
        }
    },
    {
        id: 'g', 
        label: 'Widget - 7',
        component: 'chartWidget',
        visible: true, 
        props: {
            chartOptions: {
                type: 'pyramid'
            },
            request: {
                action: 'getWidgetData'
            }
        },
        layouts: {
            lg: {i: 'g', x: 0, y: 12, w: 6, h: 4, "moved": false, "static": false},
            md: {i: 'g', x: 0, y: 9, w: 5, h: 3, "moved": false, "static": false},
            sm: {i: 'g', x: 0, y: 18, w: 6, h: 3, "moved": false, "static": false},
            xs: {i: 'g', x: 0, y: 18, w: 4, h: 3, "moved": false, "static": false},
            xxs: {i: 'g', x: 0, y: 12, w: 2, h: 2, "moved": false, "static": false}
        }
    },
    {
        id: 'h', 
        label: 'Widget - 8',
        component: 'chartWidget',
        visible: true, 
        props: {
            chartOptions: {
                type: 'doughnut'
            },
            request: {
                action: 'getWidgetData'
            }
        },
        layouts: {
            lg: {i: 'h', x: 6, y: 12, w: 6, h: 4, "moved": false, "static": false},
            md: {i: 'h', x: 5, y: 9, w: 5, h: 3, "moved": false, "static": false},
            sm: {i: 'h', x: 0, y: 21, w: 6, h: 3, "moved": false, "static": false},
            xs: {i: 'h', x: 0, y: 21, w: 4, h: 3, "moved": false, "static": false},
            xxs: {i: 'h', x: 0, y: 14, w: 2, h: 2, "moved": false, "static": false}
        }
    }
];

export default dashboardWidgets;