import React from 'react'
import './HeaderTags.css'
const index = () => {
    return (
        <section className="header-tags-container">
           <Tag text="all  items" isSelected={false}/>
           <Tag text="Teresa Lisbon" isSelected={false}/>
           <Tag text="Dramedy" isSelected={false}/>
           <Tag text="Sitcoms" isSelected={false}/>
           <Tag text="Computer Programming" isSelected={false}/>
        </section>
    )
}
const Tag=({text,isSelected})=>{
    return (
			<span style={{color: isSelected ? 'red' : 'white', backgroundColor: isSelected ? 'white' : 'hsl(0, 0%, 36%)'}} className='header__tag'>
				{text}
			</span>
		);
}
export default index
