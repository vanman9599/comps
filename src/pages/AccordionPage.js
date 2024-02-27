import Accordion from "../components/Accordion";

import React from 'react'

function AccordionPage() {
  const items = [
    {
        id: 'eielel',
        label: 'Can I use react on a project?', 
        content: 'You can use react on any project. You can use react on any project. You can use react on any project.'
    },
    {
        id: 'dlsae',
        label: 'Can i use javascirpt on a project', 
        content: 'You can use js on any project. You can use js on any project. You can use CSS on any project  '
    },
    {
        id: 'aoojg',
        label: 'Can i use CSS on a proejct', 
        content: 'You can use CSS on any project. You can use CSS on any project. You can use CSS on any project'
    }
  ];

  return <Accordion items={items}/>
}

export default AccordionPage