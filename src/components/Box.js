
const Box = (props) => {
  
  let result;
  if(props.title==="🤖" && props.result !== "tie" && props.result !==""){
    result = props.result ==="win"?"lose":"win";
  } else {
    result = props.result;
  }
  
  console.log("props.item",props.item)
  return (
    <div>
        <div className='box'>
            <h2 className={`${result}`}>{result}</h2>
            <h3>{props.title}</h3>
            {/* <img width={100} src={props.item && props.item.img} alt='img' style={{ imageRendering: "pixelated" }}/> */}
            <img
              width={100}
              src={props.item ? props.item.img : "/img/question.png"}
              alt={props.item ? props.item.name : "question"}
            />
        
        </div>
    </div>
  )
}

export default Box