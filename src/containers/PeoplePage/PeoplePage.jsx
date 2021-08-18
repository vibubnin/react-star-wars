import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import { PeopleList } from '@components/PeoplePage/PeopleList';
import { API_PEOPLE } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { getApiResource } from '@utils/network';
import classes from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => { 
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {name, id, img}
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
      setPeople([]);
    }


  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      <h1 className="headerText">Navigation</h1>
      <PeopleList people={people}/>
    </>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func.isRequired
};

export default withErrorApi(PeoplePage);
