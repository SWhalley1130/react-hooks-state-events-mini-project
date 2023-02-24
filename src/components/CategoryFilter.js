import React,{useState} from 'react'

function CategoryFilter({ CATEGORIES, handleCatButton }) {
	const [clickedButton, setClickedButton] = useState({})

  function handleClick(e) {
    
    handleCatButton(e)
    let wantedButton = arrayOfButtons.find(button => button.key === e.target.id)
    setClickedButton(wantedButton)
  }


  
  let arrayOfButtons = CATEGORIES.map((cat) => (
    <button
      className={clickedButton.key===cat ? "selected" : ""}
      onClick={handleClick}
      id={cat}
      key={cat}
    >
      {cat}
    </button>))

	return (
		<div className='categories'>
			<h5>Category filters</h5>
			{arrayOfButtons}
		</div>
	)
}

export default CategoryFilter
