import React from 'react';
import { ErrorBoundary} from '../helpers/ErrorBoundary';
import { Routes} from './Routes';
import { TopBarContainer} from '../containers/TopBarContainer';
import {AdvFormContainer} from '../containers/AdvFormContainer';
import { AdvUnitContainer } from '../containers/AdvUnitContainer';
import { UserFormContainer} from '../containers/UserFormContainer';


export let Main = (props) => {
	const {logged} = props;
	return 	(<div className="wrapper">
				<ErrorBoundary>
					<TopBarContainer {...props}/>
					{/*{logged.length == 0 ? <UserFormContainer {...props}/> : <Routes {...props}/>}*/}
					
					{logged.length == 0 ? 
						<UserFormContainer {...props}/> 
						: <AdvFormContainer {...props}/>}
					<AdvUnitContainer {...props}/>
				</ErrorBoundary>
			</div>)
            }

