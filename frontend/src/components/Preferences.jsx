import { useState } from 'react';

function Preferences() {

  // empty string initial states assumes first time login, must go to preferences screen if so.
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [age, setAge] = useState("");

  function handleSignupSubmit() {
    // send post request to api
    // goes to user profile with these details submitted
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handlePostcodeChange(event) {
    setPostcode(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleAvatarUrlChange(event) {
    setAvatarUrl(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }


  return (
    <form onSubmit={""}>
      <div>
      <label htmlFor="username" value={""}>Username: </label>
      <input id="user-name" type="text" onChange={handleUsernameChange} placeholder="type your username"></input>
      </div>
      <div>
      <label htmlFor="first-name" value={""}>First name: </label>
      <input id="first-name" type="text" onChange={handleFirstNameChange} placeholder="type your first name"></input>
      </div>
      <div>
      <label htmlFor="last-name" value={""}>Last name: </label>
      <input id="last-name" type="text" onChange={handleLastNameChange} placeholder="type your last name"></input>
      </div>
      <div>
      <label htmlFor="postcode" value={""}>Postcode: </label>
      <input id="postcode" type="text" onChange={handlePostcodeChange} placeholder="type your postcode"></input>
      </div>
      <div>
      <label htmlFor="address" value={""}>Address: </label>
      <input id="address" type="text"  onChange={handleAddressChange} placeholder="type your address"></input>
      </div>
      <div>
      <label htmlFor="avatar-url" value={""}>Avatar url: </label>
      <input id="avatar-url" type="url" onChange={handleAvatarUrlChange} placeholder="paste your avatar url"></input>
      </div>
      <div>
      <label htmlFor="age" value={""}>Age (years): </label>
      <input id="age" type="number" onChange={handleAgeChange} placeholder="input your age in years"></input>
      </div>
      <button>Sign up</button>
    </form>
  )
}

export default Preferences;
