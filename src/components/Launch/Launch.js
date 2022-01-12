const Launch = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props;
    return (
        <div>
            {mission_name} -- {launch_year} -- {mission_patch_small}
        </div>
    )
}
export default Launch;
