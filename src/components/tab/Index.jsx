import Item from "./Item";
import Items from "./Items";
import Content from "./Content";
import PropTypes from "prop-types";
import { TabContext } from "./context";
import { useEffect, useState } from "react";

export default function Tab({ children, activeTab }) {

    const [active, setActive] = useState(activeTab);
    const items = children.filter((c) => c.type === Items);
    
    const contents = children.filter((c) => c.type === Content);
    const content = contents.find(c => c.props.id === active)

    const data = {
        active,
        setActive,
    };
    useEffect(() => {
        setActive(activeTab);
    }, [activeTab]);

    return (
        <TabContext.Provider value={data}>
            <div className="border-b border-[color:var(--background-third)] bg-[color:var(--background-primary-alpha)] backdroup-blur-md sticky top-[3.313rem] z-10">
            {items}
            </div>
            {content}
        </TabContext.Provider>
    );
}

Tab.Item = Item;
Tab.Items = Items;
Tab.Content = Content;

Tab.protoTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    isActiveTab: PropTypes.string.isRequired,
};
