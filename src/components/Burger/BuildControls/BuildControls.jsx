import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = props => {
  const controls = [
    {
      label: "Salad",
      type: "salad"
    },
    {
      label: "Bacon",
      type: "bacon"
    },
    {
      label: "Cheese",
      type: "cheese"
    },
    {
      label: "Meat",
      type: "meat"
    }
  ];
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(el => {
        return (
          <BuildControl
            added={() => props.ingredientAdded(el.type)}
            removed={() => props.ingredientRemoved(el.type)}
            disabled={props.disabled[el.type]}
            key={el.label}
            label={el.label}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
