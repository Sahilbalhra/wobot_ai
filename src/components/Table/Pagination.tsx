import LeftArrowIcon from "../../assets/arrow left.svg";
import LeftLeftArrowIcon from "../../assets/arrow left-left.svg";
import RightArrowIcon from "../../assets/arrow right.svg";
import RightRightArrowIcon from "../../assets/arrow right-right.svg";

type PaginationProps = {
  totalData: number;
  totalPages: number;
  currentPage: number;
  currentLimit: number;
  setCurrentPage: (page: number) => void;
  setCurrentLimit: (page: number) => void;
};

const Pagination = ({
  totalData,
  totalPages,
  currentPage,
  currentLimit,
  setCurrentPage,
  setCurrentLimit,
}: PaginationProps) => {
  return (
    <div className="table_pagination">
      <select
        defaultValue={currentLimit}
        id="table_pagination_select"
        onChange={(e) => setCurrentLimit(parseInt(e.target.value || "0"))}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <span>
        <p className="table_pagination_page">
          {(currentPage - 1) * 10 + 1}-{currentPage * 10} of {totalData}
        </p>
      </span>
      <div className="table_pagination_icons">
        <img
          src={LeftLeftArrowIcon}
          alt="icon"
          onClick={() => {
            setCurrentPage(1);
          }}
        />
        <img
          src={LeftArrowIcon}
          alt="icon"
          onClick={() => {
            if (currentPage !== 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        />
        <img
          src={RightArrowIcon}
          alt="icon"
          onClick={() => {
            if (currentPage !== totalPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
        />
        <img
          src={RightRightArrowIcon}
          alt="icon"
          onClick={() => {
            setCurrentPage(totalPages);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
