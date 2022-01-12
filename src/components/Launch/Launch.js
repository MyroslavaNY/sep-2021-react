const Launch = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props;
    return (
        <div>
            <hr/>
            {mission_name} -- {launch_year} -- {mission_patch_small}
            <hr/>
        </div>
    )
}
export default Launch;