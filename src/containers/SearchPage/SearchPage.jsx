import React, { useEffect, useState, useCallback } from 'react'
import { debounce } from 'lodash'
import { getApiResource } from '@utils/network';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import classes from './SearchPage.module.css'
import { API_PEOPLE_SEARCH } from '@constants/api';
import { SearchPageInfo } from '../../components/SearchPage/SearchPageInfo/SearchPageInfo';
import { UiInput } from '../../components/UI/UiInput';

const SearchPage = ({ setErrorApi }) => {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_PEOPLE_SEARCH + param);
    console.log(res)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return { name, id, img }
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }

  const debouncedGetResponse = useCallback(debounce((value) => getResponse(value), 300), []);

  useEffect(() => {
    getResponse('');
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="headerText">Search</h1>
      <UiInput
        className={classes.input_search}
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Type character's name..."
      />
      <SearchPageInfo people={people} />
    </>
  )
}

export default withErrorApi(SearchPage);
