import { useState, useEffect } from "react";
import { fetchCameras } from "../services/apiServices";
import { Camera } from "../types";

export const useCameras = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadCameras = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCameras();
      setCameras(data.data || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCameras();
  }, []);

  return { cameras, loading, error, reloadCameras: loadCameras };
};
