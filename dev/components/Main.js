import React from 'react';
import { TopBar} from './TopBar';
import { ErrorBoundary} from '../helpers/ErrorBoundary';
import { UserFormContainer} from './UserFormContainer';
import { Routes} from './Routes';
//import { CreateAdvLink} from './CreateAdvLink';
import {AdvFormContainer} from './AdvFormContainer';
import { AdvUnitContainer } from './AdvUnitContainer';


export let Main = (props) => {
	const {logged} = props;
	return 	(<div className="wrapper">
				<ErrorBoundary>
					<TopBar {...props}/>
					{logged.length == 0 ? <UserFormContainer {...props}/> : <Routes {...props}/>}
					
					{/*<AdvFormContainer {...props}/>*/}
					<AdvUnitContainer {...props}/>
				</ErrorBoundary>
			</div>)
            }

