import React, { createContext } from 'react'
import const Authcontext = createContext();
function AuthProvider({children}) {
  return (
    <div>
      <Authcontext.Provider value={'sarthak'}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider