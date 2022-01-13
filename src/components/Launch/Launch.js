const Launch = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props;
    return (
        <div>
            <hr/>
            {mission_name} -- {launch_year} --
            {<div> <img src={mission_patch_small} alt={mission_patch_small}/></div>}
            <hr/>

        </div>
    )
};
export default Launch;
