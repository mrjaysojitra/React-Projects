import "./Button.css"

function Button({title,color}) { 

  return (
   <div>
   <button className={color}>{title}</button>
   </div>
  )
}



export default Button;


