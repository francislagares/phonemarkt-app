import classes from './search.module.scss';
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange }: Props) => {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchInput}>
        <input
          type='search'
          placeholder='Search products...'
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
