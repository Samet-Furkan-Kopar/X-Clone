import StickyHeader from "../..//components/sticky-header";
import Tab from "../../components/tab/Index"
const Home = () => {
    return (
        <>
            <StickyHeader title="Anasayfa"/>
            <Tab activeTab={"following"}>
              <Tab.Items>
                <Tab.Item id="for-you"> 
                  Sana Özel
                </Tab.Item>
                <Tab.Item id="following">
                  Takip Edilenler
                </Tab.Item>
              </Tab.Items>
              <Tab.Content id="for-you">
                1. content
              </Tab.Content>
              <Tab.Content  id="following">
                2. content
              </Tab.Content>
            </Tab>
        </>
    );
};

export default Home;
