/* RandomUserData.js */

import React,
{
	useState,
	useEffect
} from 'react';

function App() {
  const [count, setCount] = useState(0);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		fetch('https://random-data-api.com/api/users/random_user')
			.then(response => response.json())
			.then(data => setUserData(data));
	}, [count]);

	return (
		<div>
      <button onClick = {function(){
        setCount(count + 1);
      }}>Click me {count}</button>
			{userData && (
				<div>
					<h2>User Information</h2>
					<p>
						Name:
						{userData.first_name}
						{userData.last_name}
					</p>
					<p>
						Email: {userData.email}
					</p>
					{/* Add more user data fields as needed */}
				</div>
			)}
		</div>
	);
}


export default App

