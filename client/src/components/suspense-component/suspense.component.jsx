import React, { Suspense } from "react";

import Spinner from "../spinner/spinner.component";
import ErrorBoundary from "../error-boundary/error-boundary.component";

const SuspenseComponent =
	(Child) =>
	({ ...otherProps }) => {
		return (
			<Suspense fallback={<Spinner />}>
				<ErrorBoundary>
					<Child {...otherProps} />
				</ErrorBoundary>
			</Suspense>
		);
	};

export default SuspenseComponent;
