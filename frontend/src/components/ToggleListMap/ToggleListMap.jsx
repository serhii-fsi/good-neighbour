import ToggleListMapView from "./ToggleListMapView";

function ToggleListMap(props) {

    const { setListMapView } = props;

    const handleTabChange = () => {
        setListMapView(currentVal => currentVal === 'list' ? 'map' : 'list');
    }

    return <ToggleListMapView onChange={handleTabChange} {...props} />;
}

export default ToggleListMap;