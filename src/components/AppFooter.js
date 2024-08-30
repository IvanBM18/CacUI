import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="ms-auto">
          CAC (Club de Algoritmia de Cucei)
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
