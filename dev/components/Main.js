import React from 'react';
import { GoodsTable} from './GoodsTable';
import { FormInputContainer} from './FormInputContainer';
import { ErrorBoundary} from './ErrorBoundary';
import { UserFormContainer} from './UserFormContainer';



export let Main = (props) => {
	return 	<div className="wrapper">
				<a className="github" target="_blank" href="https://github.com/462960/Colored_products">GitHub</a>
				<ErrorBoundary>
					<UserFormContainer {...props} />
				</ErrorBoundary>
			</div>
            }

 // export class Main extends React.Component{
 // 	doSomething(valu) {
    // print the form values to the console
 //    console.log(valu.name)
 //  }

 // 	render(){
 // 		return 	(<div className="wrapper">
 // 						<a className="github" target="_blank" href="https://github.com/462960/Colored_products">GitHub</a>
 // 						<ErrorBoundary>
 // 							<UserFormContainer {...this.props} />
 // 						</ErrorBoundary>
 // 					</div>)

 // 	}

 // }
 