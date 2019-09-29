import React from 'react';

function newLocationForm(){
  return (
    <form>
      <label>
        Your Name:
        <input type="text" name="name" placeholder="Your Name" required/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default newLocationForm;