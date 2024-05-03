import React, { useState, useEffect } from 'react';


import Frame1 from '../Frame1';
import Frame2 from '../Frame2';

export default function Frame0() {
  const [loading, setLoading] = useState(true);
  
  // Depois de 2 segundos muda o status de carregando para falso...
  setTimeout(function () {
    setLoading(false);
  }, 2000);


   // Observa que ao mudar o estado a tela recarrega...

   return (
     loading? <Frame1/>:<Frame2/>
   );
}