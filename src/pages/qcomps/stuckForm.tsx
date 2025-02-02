/**
 * When the Form is rendered, it appears to be frozen. 
 * When a user enters stuff into the <input> tags or 
 * clicks on the reset button nothing happens. 
 * Identify and fix the error. 
 */
// export default function Form() {
//   let firstName = '';
//   let lastName = '';

//   function handleFirstNameChange(e: { target: { value: string; }; }) {
//     firstName = e.target.value;
//   }

//   function handleLastNameChange(e: { target: { value: string; }; }) {
//     lastName = e.target.value;
//   }

//   function handleReset() {
//     firstName = '';
//     lastName = '';
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }


import { useState } from 'react';

export default function Form() {
  // Use state to manage firstName and lastName
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  // Update firstName when the input changes
  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  // Update lastName when the input changes
  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  // Reset both firstName and lastName
  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}