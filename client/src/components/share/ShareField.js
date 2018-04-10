// ShareField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div className={'field-wrapper ' + (touched && error ? 'error' : '')}>
			<input {...input} type="text" />
			<label>{label}</label>
			<span className="error-message">{touched && error}</span>
		</div>
	);
};