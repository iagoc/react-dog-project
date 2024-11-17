import React, { Children } from 'react'
import { UserContext } from '../../UserContext'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext)

  if (login === null) return null

  return login ? children : <Navigate to="/login" />;
}

export default ProtectedRoute
