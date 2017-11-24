import React from 'react';
import { TopBar} from './TopBar';
import { ErrorBoundary} from './ErrorBoundary';
import { UserFormContainer} from './UserFormContainer';


export let Main = (props) => {
	const {logged} = props;
	return 	(<div className="wrapper">
				<ErrorBoundary>
					<TopBar {...props}/>
					{logged.length == 0 && <UserFormContainer {...props} />}
				</ErrorBoundary>
			</div>)
            }

