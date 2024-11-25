/* RandomUserData.js */

import React,
{
	useState,
	useEffect
} from 'react';

function App() {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://random-data-api.com/api/users/random_user')
      .then(response => response.json())
      .then(data => setUserData(data));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

		

	return (
		<div>
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

export default App;