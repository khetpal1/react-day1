import React from 'react'

function App()
{

	let [ a,seta ]=React.useState([])
	// a=[]
	// seta=function{} that will chnage a's values

	const addMore=() =>{
		let topic=prompt()
		seta( [   ...a,  topic ]  )
	}

	return <div>

		<button onClick={ () => addMore() }>add new topic</button>

		<h1>total {a.length}</h1>

		<ul>
			{a.map(item=><li>{item}</li>)}
		</ul>
	</div>
}

export default App