import React from "react";
import useForm from "react-hook-form";
import "./styles.css";

export default function Form(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { 
        props.onSubmit(data)
     }

    watch('searchWord')// watch input value by passing the name of it

    return (
        // "handleSubmit" will validate your inputs before invoking "onSubmit"
        <form onSubmit={handleSubmit(onSubmit)}>
            {props.name1}
            {/* include validation with required or other standard HTML validation rules */}
            <input name="searchWord" placeholder='Book title' ref={register({ required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.searchWord && <span>This field is required</span>}

            <input type="submit" />
        </form>
    )
};
