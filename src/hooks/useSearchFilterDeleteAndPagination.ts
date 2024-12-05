import { useState, useEffect } from "react";
import { Camera } from "../types";

export const useSearchFilterDeleteAndPagination = (data: Camera[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterLocation, setFilterLocation] = useState<string>("");
  const [deletedCameras, setDeletedCameras] = useState<number[]>([]);

  // Search filter
  const filteredData = data.filter((camera) => {
    const matchesSearch = camera.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? camera.status === filterStatus : true;
    const matchesLocation = filterLocation
      ? camera.location === filterLocation
      : true;
    const matchesDeletedCameras =
      deletedCameras.length > 0 ? !deletedCameras.includes(camera.id) : true;
    return (
      matchesSearch && matchesStatus && matchesLocation && matchesDeletedCameras
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / currentLimit);
  const currentItems = filteredData.slice(
    (currentPage - 1) * currentLimit,
    currentPage * currentLimit
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterStatus, filterLocation]);

  //Remove last page if no data is available
  useEffect(() => {
    if (currentItems.length === 0 && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [currentItems, currentPage]);

  return {
    currentItems,
    totalPages,
    searchTerm,
    setSearchTerm,
    currentPage,
    currentLimit,
    setCurrentPage,
    setCurrentLimit,
    filterStatus,
    setFilterStatus,
    deletedCameras,
    setDeletedCameras,
    filterLocation,
    setFilterLocation,
  };
};
