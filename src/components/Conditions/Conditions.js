import React from 'react';

const Conditions = (props) => {
   return (
      /*<>{props.responseObj.response.status === 200 ?*/
         <>
           <p>Location: <strong>{props.responseObj.location.name}</strong></p>
           <p>It is currently <strong>{props.responseObj.current.temp_c}</strong> degrees Celsius.</p>
           <p>{props.responseObj.current.condition.text}</p>
         </>
      /*: <p>Invalid search</p>
       }
      </>*/
   )
}

export default Conditions;