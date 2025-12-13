import React from 'react'

function OnCopy() {
    function copyfun(){
        alert("copy triggred");
    }
  return (
    <div>
        <p onCopy={copyfun} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nobis necessitatibus inventore voluptas eius eum nihil obcaecati libero tenetur dicta.</p>
    </div>
  )
}

export default OnCopy;