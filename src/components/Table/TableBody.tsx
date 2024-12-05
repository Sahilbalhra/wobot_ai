import CloudIcon from "../../assets/Cloud.svg";
import EdgeIcon from "../../assets/Edge.svg";
import NotInterestedIcon from "../../assets/not-interested.svg";
import AIcon from "../../assets/A.svg";
import BIcon from "../../assets/B.svg";
import CIcon from "../../assets/C.svg";
import NoIcon from "../../assets/no.svg";
import { Camera } from "../../types";

const TableBody = ({
  data,
  updateStatus,
  setDeletedCameras,
}: {
  data: Camera[];
  updateStatus: (id: number, status: "Active" | "Inactive") => Promise<void>;
  setDeletedCameras: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <tbody>
      {data.length > 0 ? (
        data.map((camera) => (
          <tr key={camera._id}>
            <td>
              <input
                type="checkbox"
                className="table_row_checkbox"
                id={`table_body_row_checkbox_${camera._id}`}
              />
            </td>
            <td>
              <p className="customer_name"> {camera.name || "N/A"}</p>
              <p className="customer_email">sherwinwilliams@wobot.ai</p>
            </td>
            <td>
              <span className="health_icons">
                {camera.health.cloud ? (
                  <>
                    <img src={CloudIcon} alt="icon" />
                    &nbsp;
                    {camera.health.cloud === "A" ? (
                      <img src={AIcon} alt="A" />
                    ) : camera.health.cloud === "B" ? (
                      <img src={BIcon} alt="B" />
                    ) : camera.health.cloud === "C" ? (
                      <img src={CIcon} alt="C" />
                    ) : (
                      <img src={NoIcon} alt="-" />
                    )}
                  </>
                ) : null}{" "}
                {camera.health.device ? (
                  <>
                    &nbsp;
                    <img src={EdgeIcon} alt="icon" />
                    &nbsp;{" "}
                    {camera.health.device === "A" ? (
                      <img src={AIcon} alt="A" />
                    ) : camera.health.device === "B" ? (
                      <img src={BIcon} alt="B" />
                    ) : camera.health.device === "C" ? (
                      <img src={CIcon} alt="C" />
                    ) : camera.health.device ? (
                      <span className="health_icon">
                        {camera.health.device}
                      </span>
                    ) : (
                      <img src={NoIcon} alt="-" />
                    )}
                  </>
                ) : null}
              </span>
            </td>
            <td>{camera.location || "N/A"}</td>
            <td>{camera.recorder || "N/A"}</td>
            <td>{camera.tasks || "N/A"}</td>
            <td>
              <span
                className={`status_${
                  camera.status === "Active" ? "active" : "inactive"
                }`}
                onClick={() => {
                  updateStatus(
                    camera.id,
                    // camera.status
                    camera.status === "Active" ? "Inactive" : "Active"
                  );
                }}
              >
                {camera.status || "N/A"}
              </span>
            </td>
            <td>
              <img
                src={NotInterestedIcon}
                alt="interested"
                className="delete_icon"
                onClick={() => {
                  setDeletedCameras((prev) => [...prev, camera.id]);
                }}
              />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={8} className="no_data_found">
            No Data Found
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
