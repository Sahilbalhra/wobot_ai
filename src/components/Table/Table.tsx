import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { Camera } from "../../types";

const Table = ({
  data,
  updateStatus,
  setDeletedCameras,
}: {
  data: Camera[];
  updateStatus: (id: number, status: "Active" | "Inactive") => Promise<void>;
  setDeletedCameras: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <table className="camera-table">
      <TableHeader />
      <TableBody
        data={data}
        updateStatus={updateStatus}
        setDeletedCameras={setDeletedCameras}
      />
    </table>
  );
};

export default Table;
