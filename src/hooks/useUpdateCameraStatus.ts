import { useState } from "react";
import { updateCameraStatus } from "../services/apiServices";

export const useUpdateCameraStatus = (refresh: () => void) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateStatus = async (id: number, status: "Active" | "Inactive") => {
    setLoading(true);
    setError(null);
    try {
      await updateCameraStatus(id, status);
      refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { updateStatus, loading, error, setError };
};
