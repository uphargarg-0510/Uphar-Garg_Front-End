
# SteelEye Assignment

#### Uphar Garg | 12006715 | uphargarg0510@gmail.com |

## Total 6 Errors Found.

### Error 1

In the WrappedSingleListItem component, onClickHandler is being called with an argument (index) , so its our 1st error . 

incorrect one:

```
onClick={onClickHandler(index)}

```

correct one:

```
onClick={()=>onClickHandler(index)}
```

### Error 2

In the WrappedListComponent component, useState was used incorrectly.

incorrect one:

```
const [setSelectedIndex,selectedIndex] = useState([]);

```


correct should be:

```
const [selectedIndex, setSelectedIndex] = useState([]);
```

### Error 3

In the SingleListItem component, the isSelected prop is being passed the state variable selectedIndex, which is an object returned by the useState hook. isSelected should be a boolean value representing whether the item is selected or not. 

incorrect:

```
isSelected={selectedIndex}
```

Therefore, it should be changed to:

```
isSelected={selectedIndex === index}
```

### Error 4

In the WrappedListComponent component, the propTypes for items is incorrectly defined. It sholud be arrayOf instead of shapeOf

Incorrect:

```
WrappedListComponent.propTypes = {
  items: PropTypes.array(PropTypes.shape({ // error 4 -> the term is arrayOf not shapeOf 
    text: PropTypes.string,
  })),
};
```


correct:

```
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ // error 4 -> the term is arrayOf not shapeOf 
    text: PropTypes.string,
  })),
};
```

### Error 5

In the WrappedListComponent component, defaultProps for items should not be null. It should be:

incorrect:

```
items:null
```

correct: 

 ```
items: [                    
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
  ]
 ```


### Error 6

There is no need of useEffect hook for this code

```
useEffect(() => {
    setSelectedIndex(null);
}, []);
```

We can remove the above code.

 
# Code Output after removing the error

![Output](https://user-images.githubusercontent.com/72004195/233855447-bf036993-8f23-4da9-bf8a-2ca085b2b660.png)


# Code Optimization

#### Before Optimization of code the WrappedSingleListItem renders multiple times when we click on the list item

![Output_after_optimization](https://user-images.githubusercontent.com/72004195/233855549-4946c2cd-fb6a-49fe-a166-ac4ba9f744ff.png)


#### After Optimization of code the WrappedSingleListItem renders only 1 times when we click on the list item

![Output_before_optimization](https://user-images.githubusercontent.com/72004195/233855575-f8976fba-b71e-40d1-87b8-8a09bcec87e3.png)


