import { Field, Formik, Form } from "formik"
import { foodsName } from "../types"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup";
import React from "react"

import styles from "./CalcBarbecue.module.css";

const validationScheme = Yup.object().shape({
  people: Yup.number().min(1, "number of people is required"),
  foodSelection: Yup.array()
  .of(Yup.string())
  .test(
    "check-foodSelection",
    "Select at least one food",
    (array) => array !== null && array!.length > 0
  ),
});


const Calc = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Formik initialValues={{people: 0, foodSelection: [] }}
      validationSchema={validationScheme}
      onSubmit={(values) => {
        navigate("/result", {
          state: {
            people: values.people,
            foodSelected: values.foodSelection,
          },
        })
      }}>
        {({errors, touched}) => (
          <Form>
          <div className={styles.inputGroup}>
            <label htmlFor="people" className={styles.inputLabel}>Number of People</label>
            <Field name= "people" type="number" className={styles.inputField}/>
            {errors.people && touched.people ? (<p className={styles.error}>{errors.people}</p>) : null}
          </div>
          <h2>Select Barbecue Foods</h2>
          {Object.keys(foodsName).map((food) => (
            <div>
              <Field
              type="checkbox"
              name="foodSelection"
              value={food}
              className={styles.checkboxInput}
              />
              <label htmlFor="foodsName">{foodsName[food]}</label>
            </div>
          ))}
          {errors.foodSelection ? (<p className={styles.error}>{errors.foodSelection}</p>): null}
          <button type="submit" className={styles.calculateButton}>Calculate</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default Calc
