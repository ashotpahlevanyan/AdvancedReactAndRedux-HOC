import React, { Component } from 'react';

export default function(ComposedComponent) {
	class Authentication extends Component {
		render() {
			console.log(this.props.resources); // will give resourceList
			return(
				<ComposedComponent {...this.props} />
			);
		}
	}

	return Authentication;
}

// In some other location ... Not in this file ...
// we want to use this HOC

import Authentication; // This is my HOC
import Resources; // This is a component I want to wrap with Authentication

const ComposedComponent = Authentication(Resources);

// In some render it will be
<ComposedComponent resources={resourceList}/>
