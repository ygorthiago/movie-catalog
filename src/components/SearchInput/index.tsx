import React, { InputHTMLAttributes } from 'react';

import { SearchInputSection } from './styles';

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...rest}) => {
  return (
    <SearchInputSection className="search-input">
      <input
        type="text"
        id="search"
        autoComplete="off"
        placeholder="Busque um filme por nome ou gênero..."
        {...rest}
      />
      <button type="submit">Buscar</button>
    </SearchInputSection>
  );
}

export default SearchInput;