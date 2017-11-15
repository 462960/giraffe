import React from 'react';


export const FormInput = (props) =>
						<form className="prod_input" 
						ref={props.resetRef} 
						onSubmit={props.handleInput}
						>
							<input type="text" 
							ref={props.focusRef}
							onChange={props.handleProduct} 
							placeholder="Product name"
							/>
							<p>Name the product and pick colors</p>
							<ul className="checkbox_holder">
								<li>
									<input type="checkbox" onChange={props.handleRed}/>
								</li>
								<li>
									<input type="checkbox" onChange={props.handleGreen}/>
								</li>
								<li>
									<input type="checkbox" onChange={props.handleBlue}/>
								</li>
			
							</ul>
							<input type="submit" hidden/>
						</form>
