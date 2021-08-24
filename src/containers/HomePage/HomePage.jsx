import React from 'react'
import { ChooseSide } from '@components/HomePage/ChooseSide';
import classes from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <h1 className="headerText">Home Page</h1>
      <ChooseSide />
    </>
  )
}
