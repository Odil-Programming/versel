import DesignValues from "../components/DesignChilds/DesignValues";
import Introduction from "../components/DesignChilds/Introduction";
import Design from "../pages/Design";
import Development from "../pages/Development";
import Home from "../pages/Home";

const Data = [
    {
        id: 1,
        title: 'Ant Design',
        path: '/home',
        element: <Home />
    },
    {
        id: 2,
        title: 'Design',
        path: '/design',
        element: <Design />,
        child: [
            {
                id: 4,
                title: 'Introduction',
                path: '/design/introduction',
                element: <Introduction />
            },
            {
                id: 5,
                title: 'Design Values',
                path: '/design/designValues',
                element: <DesignValues />
            }
        ]
    },
    {
        id: 3,
        title: 'Development',
        path: '/development',
        element: <Development />
    },
]

export default Data