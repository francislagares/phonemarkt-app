import classes from './search.module.scss';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange }: Props) => {
  return (
    <div className={classes.searchForm}>
      <input
        type='search'
        placeholder='Filter products...'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
