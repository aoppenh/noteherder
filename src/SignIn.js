import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = ({ authHandler }) => {
  const authenticate = (provider) => {
    auth
      .signInWithPopup(provider)
      .then((data) => {
        authHandler(data.user)
      })
  }

  return (
    <div>
      <button
        className="SignInGit"
        onClick={() => { authenticate(githubProvider) }}
      >
        Sign In With GitHub
    </button>
      <button
        className="SignInGoogle"
        onClick={() => { authenticate(googleProvider) }}
      >
        Sign In With Google
    </button>
  </div>
  )
}

export default SignIn