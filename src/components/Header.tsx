import SearchIcon from "../assets/search_icon.svg";

type Props = {
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({ searchValue, onChange }: Props) => {
  return (
    <div className="header">
      <div>
        <h1 className="header_title">Cameras</h1>
        <p className="header_desc">Manage your cameras here.</p>
      </div>
      {/* Search and Filter */}
      <div className="search_container">
        <input
          type="text"
          placeholder="Search"
          id="search_input"
          className="search_input"
          value={searchValue}
          onChange={onChange}
        />
        <img src={SearchIcon} alt="🔍" className="search_icon" />
      </div>
    </div>
  );
};

export default Header;
