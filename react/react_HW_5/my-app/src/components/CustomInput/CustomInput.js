import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const CustomInput = (props) => {
    const { type, placeholder, } = props;

    const [field, meta, helpers] = useField(props);

    console.log(meta);

    const onChange = (e) => {
        if (e.target.value === 'aaa') {
            helpers.setTouched(true);
            helpers.setError('NEVER INSERT "aaa"!!!!!!');
        }

        field.onChange(e);
    }

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                // value={field.value}
                // name={field.name}
                // onChange={field.onChange}
                // onBlur={field.onBlur}
                {...field}
                onChange={onChange}
            />

            { meta.touched && <span className="error">{meta.error}</span> }
        </>
    );
}

CustomInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
};
CustomInput.defaultProps = {
    type: 'text',
    placeholder: '',
};

export default CustomInput;