import React from 'react';
import { ErrorBoundary} from '../helpers/ErrorBoundary';
import { Routes} from './Routes';
import { Invitation} from './Invitation';
//import { DeleteAlert} from './DeleteAlert';
import { TopBarContainer} from '../containers/TopBarContainer';
import {AdvFormContainer} from '../containers/AdvFormContainer';
import { AdvUnitContainer } from '../containers/AdvUnitContainer';
import { UserFormContainer} from '../containers/UserFormContainer';


export let Main = (props) => {
	const {logged, adverts} = props;
	return 	(<div className="wrapper">
				<ErrorBoundary>
					{/*<DeleteAlert/>*/}
					<TopBarContainer {...props}/>
					{/*{logged.length == 0 ? <UserFormContainer {...props}/> : <Routes {...props}/>}*/}
					
					{logged.length == 0 ? <UserFormContainer {...props}/> : <AdvFormContainer {...props}/>}
					{adverts.length == 0 ? <Invitation {...props}/> : <AdvUnitContainer {...props}/>}
				</ErrorBoundary>
			</div>)
            }

