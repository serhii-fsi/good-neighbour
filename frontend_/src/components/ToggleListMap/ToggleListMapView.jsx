import { UnorderedListOutlined, HomeOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

const ToggleListMapView = (props) => {

    const { onChange, listMapView } = props;
    
    return (
        <Tabs
            onChange={onChange}
            defaultActiveKey={listMapView === 'list' ? "1" : "2"}
            items={[
                { key: 1, label: `List`, icon: <UnorderedListOutlined />},
                { key: 2, label: `Map`, icon: <HomeOutlined />}
            ]}
        />
    )
};

export default ToggleListMapView;