import React, { useMemo } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Table from "./components/Table/Table";
import { useCameras } from "./hooks/useCameras";
import Pagination from "./components/Table/Pagination";
import { useUpdateCameraStatus } from "./hooks/useUpdateCameraStatus";
import { useSearchFilterDeleteAndPagination } from "./hooks/useSearchFilterDeleteAndPagination";
import "./App.css";

const App: React.FC = () => {
  const { cameras, loading, error, reloadCameras } = useCameras();
  const {
    updateStatus,
    loading: updateLoading,
    error: updateError,
    setError: setUpdateError,
  } = useUpdateCameraStatus(reloadCameras);

  const {
    currentItems,
    totalPages,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    currentLimit,
    setCurrentLimit,
    filterStatus,
    setFilterStatus,
    deletedCameras,
    setDeletedCameras,
    filterLocation,
    setFilterLocation,
  } = useSearchFilterDeleteAndPagination(cameras);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const uniqueLocations = useMemo(() => {
    return Array.isArray(cameras)
      ? Array.from(new Set(cameras.map((camera) => camera.location)))
      : [];
  }, [cameras]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Header searchValue={searchTerm} onChange={handleSearchInput} />
        <Filters
          filterStatus={filterStatus}
          setFiterStatus={setFilterStatus}
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
          data={uniqueLocations}
        />
        {error || updateError ? (
          <>
            {error ? (
              <h2 className="error">{error}</h2>
            ) : (
              updateError && (
                <>
                  <h2 className="error">{updateError}</h2>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setUpdateError("");
                    }}
                  >
                    Return
                  </button>
                </>
              )
            )}
          </>
        ) : loading || updateLoading ? (
          <h2 className="loading">
            {loading
              ? "Loading..."
              : updateLoading
              ? "Updating Camera Status..."
              : ""}
          </h2>
        ) : (
          <>
            <Table
              data={currentItems}
              updateStatus={updateStatus}
              setDeletedCameras={setDeletedCameras}
            />
            <Pagination
              totalData={
                Array.isArray(cameras)
                  ? cameras.length - deletedCameras.length
                  : 0
              }
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              currentLimit={currentLimit}
              setCurrentLimit={setCurrentLimit}
            />
          </>
        )}
      </div>
    </>
  );
};

export default App;

