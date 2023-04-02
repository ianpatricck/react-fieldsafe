# @ React FieldSafe
## Just an abstraction of the FieldSafe package for React.js

Library to assist in the development of security for form fields, with validation by RegEx, Sanitization and Mask in inputs.

### Installation

npm:
```
$ npm install react-fieldsafe
```

yarn:
```
$ yarn add react-fieldsafe
```
### Usage:

```jsx
import { useState } from 'react';
import { Validation } from 'react-fieldsafe';

export default function App() {
  
  const [email, setEmail] = useState('guest@test.com');

  const submitForm = (e) => {
    e.preventDefault(); 
    
    const validator = new Validation();
    const isEmail = validator.email(email);

    console.log(isEmail) // true
  }

  return (
    <div className="app">
      <h1>React FieldSafe</h1> 

      <form method="POST" onSubmit={submitForm}>

        <input 
          type="text" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        
        <button>Submit</button>

      </form>

    </div>
  );
};
```

#### Other concepts and examples will be discussed in this project's Wiki.
