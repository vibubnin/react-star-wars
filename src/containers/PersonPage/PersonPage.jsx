import React, { useEffect, useState, Suspense } from 'react'
import { useParams } from 'react-router';
import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';

import { PersonInfo } from '@components/PersonPage/PersonInfo/PersonInfo';
import { PersonPhoto } from '@components/PersonPage/PersonPhoto/PersonPhoto';
import { PersonLinkBack } from '@components/PersonPage/PersonLinkBack/PersonLinkBack';
import { UiLoading } from '@ui/UiLoading/UiLoading';

import classes from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms/PersonFilms'));

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState([]);
  const [personName, setPersonName] = useState('');
  const [personPhoto, setPersonPhoto] = useState('');
  const [personFims, setPersonPersonFilms] = useState([]);

  useEffect(() => {
    setPersonPhoto(getPeopleImage(id));

    (async () => {
      const res = await getApiResource(API_PERSON + id);
      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Masss', data: res.mass },
          { title: 'Hair color', data: res.hair_color },
          { title: 'Skin color', data: res.skin_color },
          { title: 'Eye color', data: res.eye_color },
          { title: 'Birth year', data: res.birth_year },
          { title: 'Gender', data: res.gender }
        ]);
        setPersonName(res.name);
        setPersonPersonFilms(res.films);
        setErrorApi(false);
      } else {
        setPersonInfo([]);
        setPersonName('');
        setPersonPersonFilms([]);
        setErrorApi(true);
      }
    })();
  }, [id]);

  return (
    <>
      <PersonLinkBack />
      <div className={classes.wrapper}>
        <span className={classes.person_name}>{personName}</span>
        <div className={classes.container}>
          <PersonPhoto personName={personName} personPhoto={personPhoto} />
          <PersonInfo personInfo={personInfo} />
          {personFims.length > 0 && (
            <Suspense fallback={<UiLoading theme="blue" isShadow />}>
              <PersonFilms personFims={personFims} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  )
}

export default withErrorApi(PersonPage);
