

function IfElse() {
    let value = true;
  return (
    <div>
        {(()=>{
            if(value == true){
                return " you are eleigible";
            }else{
                return "you are not eligible";
            }
        })()}
    </div>
  )
}

export default IfElse;