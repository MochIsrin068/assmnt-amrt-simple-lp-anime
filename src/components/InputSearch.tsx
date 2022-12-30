import { TPropsInputSearch } from "../types/components.types";

export default function InputSearch({ onSearch }: TPropsInputSearch) {
  return (
    <>
      <div className="input-search">
        <input
          type="text"
          placeholder="Search anime movie..."
          onChange={onSearch}
          data-testid="input-search"
        />
      </div>
    </>
  );
}
