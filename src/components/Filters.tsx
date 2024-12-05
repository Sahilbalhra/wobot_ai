import LocationIcon from "../assets/location.svg";
import Vector from "../assets/Vector.svg";

type FiltersProps = {
  data: string[];
  filterStatus: string;
  setFiterStatus: (status: string) => void;
  filterLocation: string;
  setFilterLocation: (status: string) => void;
};

const Filters = ({
  data,
  filterStatus,
  setFiterStatus,
  filterLocation,
  setFilterLocation,
}: FiltersProps) => {
  return (
    <div className="filter_container">
      <div className="location_filter">
        <img src={LocationIcon} alt="?" />
        <select
          className="filter_select"
          id="location_filter_select"
          defaultValue={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        >
          <option value="">Location</option>
          {data.map((location, index) => {
            return (
              <option value={location} key={index}>
                {location}
              </option>
            );
          })}
        </select>
      </div>
      <div className="Status_filter">
        <img src={Vector} alt="?" />
        <select
          className="filter_select"
          id="status_filter_select"
          defaultValue={filterStatus}
          onChange={(e) => setFiterStatus(e.target.value)}
        >
          <option value="">Status</option>{" "}
          <option value="Active">Active</option>{" "}
          <option value="Inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
