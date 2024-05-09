"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./LoginForm.module.css";

type Inputs = {
  username: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("username")); // watch input value by passing the name of it
  console.log(errors, "errors");

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="username"
        className={styles.inputField}
        {...register("username", {
          required: true,
          minLength: 10,
          maxLength: 200,
          pattern: {
            value: /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/,
            message: "Invalid username",
          },
        })}
      />
      {errors.username && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="password"
        className={styles.inputField}
        {...register("password", {
          required: true,
          minLength: 10,
          maxLength: 200,
          pattern: {
            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            message: "Invalid password",
          },
        })}
      />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <input type="submit" className={styles.submitButton} />
    </form>
  );
}

export default LoginForm;
