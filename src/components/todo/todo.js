import classes from "./todo.module.css";
import check from "../../images/icon-check.svg";
import Button from "../button/button";
import cross from "../../images/icon-cross.svg";

const Todo = (props) => {
  const isCompleted = true;
  return (
    <article className={classes.todo}>
      <div className={classes.checkboxDiv}>
        <input type="checkbox" className={classes.checkbox} id={props.id} />
        <label className={classes.label} htmlFor={props.id}>
          <img src={check} />
        </label>
      </div>
      <p className={`${classes.todoPara} ${isCompleted && classes.completed}`}>
        jhfjk sdfhvkjhd iuhui fhsdkjicv iriofjs kdjcjfi ojkkldfjgkl vjhfjk
        sdfhvkjhd iuhui fhsdkjicv iriofjs kdjcjfi ojkkldfjgkl jhfjk sdfhvkjhd
        iuhui fhsdkjicv iriofjs kdjcjfi ojkkldfjgkl
      </p>
      <Button className={classes.delete}>
        <img src={cross} />
      </Button>
    </article>
  );
};

export default Todo;
