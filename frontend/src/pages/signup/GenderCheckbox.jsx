import React from 'react'

const GenderCheckbox = ({onCheckboxChange , selectedGender}) => {
  return (

    
    <div className='flex'> {/* male checkbox */}
        <div className='form-control'>
        <label className={`cursor-pointer label gap-2 ${selectedGender === "male" ? "selected" : ""}`}>
            <span className="label-text">Male</span>
            <input type="checkbox"  className="checkbox border-slate-900 checkbox-success" 
            checked={selectedGender === "male"}
            onChange={()=> onCheckboxChange("male")}
            />
        </label>
        </div>

        
        {/* female checkbox */}
        <div className='form-control'>
        <label className={`cursor-pointer label gap-2 ${selectedGender === "female" ? "selected" : ""}`}>
            <span className="label-text">Female</span>
            <input type="checkbox"  className="checkbox border-slate-900 checkbox-success" 
              checked={selectedGender === "female"}
              onChange={()=> onCheckboxChange("female")}
            />
        </label>
        </div>
       
      
    </div>
  )
}

export default GenderCheckbox
