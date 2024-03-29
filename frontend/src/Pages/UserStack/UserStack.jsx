import React from 'react'
import LocalStore from '../../Store/LocalStore';
import { Navigate, Outlet } from 'react-router-dom';

export default function UserStack() {
  return (
    <>
      <Outlet/>
    </>
  )
}
