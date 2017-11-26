import React from 'react';
import { TopBar} from './TopBar';
import { AdvUnit} from './AdvUnit';
import { ErrorBoundary} from '../helpers/ErrorBoundary';
import { UserFormContainer} from './UserFormContainer';
import { Routes} from './Routes';
import { CreateAdvLink} from './CreateAdvLink';


export let Main = (props) => {
	const {logged} = props;
	return 	(<div className="wrapper">
				<ErrorBoundary>
					<TopBar {...props}/>
					{logged.length == 0 ? <UserFormContainer {...props}/> : <Routes {...props}/>}
					<AdvUnit/>
				</ErrorBoundary>
			</div>)
            }

