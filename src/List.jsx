import React, { useState, useEffect, memo, useCallback } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text, }) => {

  console.log("wrapperList Rendered")

  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red' }}
      onClick={()=>onClickHandler(index)}  //error 1 -> onClickHandler(index) changes to ()=>onClickHandler(index)
    >
      {text}
    </li>
  );

};


WrappedSingleListItem.propTypes = {
  index: PropTypes.number,   // optimization
  isSelected: PropTypes.bool.isRequired, // optimization
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};


const SingleListItem =React.memo(WrappedSingleListItem);



// List Component

const WrappedListComponent = ({ items }) => {

  const [selectedIndex, setSelectedIndex] = useState([]); // error 2 -> [setSelectedIndex,selectedIndex] changes to [selectedIndex, setSelectedIndex]

  // error 6 -> there is no use of useEffect

  // useEffect(() => {
  //   setSelectedIndex(null);
  // }, []);

  // handleClick before  optimization

  // const handleClick = index => {
  //   setSelectedIndex(index);
  // };

  // optimized version of handleClick

  const handleClick = useCallback((index) => {
    setSelectedIndex(index);
  }, [])

  console.log("list rendered");


  return (

    <ul style={{ textAlign: 'left' }}>
      {
        items.map((item, index) => (
          <SingleListItem
            onClickHandler={()=>handleClick(index)}
            text={item.text}
            index={index}
            key={index} // warning : every list should have a unique key so we added key={index} 
            isSelected={selectedIndex === index} // error 3 -> isSelected returns a boolean so there would be {selectedIndex === index} instead of {selectedIndex}
          />
        ))
      }
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ // error 4 -> the term is arrayOf not shapeOf 
    text: PropTypes.string,
  })),
};

WrappedListComponent.defaultProps = {
  items: [                    // error 5 -> items is a array of objects so it would not be null. 
    {
      text: "I ",
    },
    {
      text: "Will",
    },
    {
      text: "Take",
    },
    {
      text: "Placement",
    },
    {
      text: "In",
    },
    {
      text: "SteelEye",
    },
  ],
};

const List = React.memo(WrappedListComponent);

export default List;

