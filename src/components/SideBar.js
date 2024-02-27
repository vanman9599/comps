import React from 'react';
import Link from './Link';


function SideBar() {
  const links =[ 
    {label: 'Dropdown', path: '/'},
    {label: 'Accordion', path: '/accordion'},
    {label: 'Buttons', path: '/buttons'},
    {label: "Modal", path: '/modal'}
    
  ]
const renderedLinks = links.map((link)=>{
  return <Link activeClassName="font-bold border-l-4 border-blue-500 pl-2" className="mb-3" to={link.path} key={link.label}>{link.label}</Link>
})
return (
  <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
    {renderedLinks}
  </div>
)
}

export default SideBar