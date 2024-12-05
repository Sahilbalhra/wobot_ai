import { BASE_URL } from "../constant/endpoints";

const API_TOKEN = "4ApVMIn5sTxeW7GQ5VWeWiy";

export const fetchCameras = async () => {
  const response = await fetch(`${BASE_URL}/fetch/cameras`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });

  if (!response.ok) throw new Error("Failed to fetch camera data");

  return await response.json();
};

export const updateCameraStatus = async (
  id: number,
  status: "Active" | "Inactive"
) => {
  const response = await fetch(`${BASE_URL}/update/camera/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({ id, status }),
  });

  if (!response.ok) throw new Error("Failed to update camera status");

  return await response.json();
};
