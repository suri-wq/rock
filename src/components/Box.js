
const Box = (props) => {
  
  let result;
  if(props.title==="🤖" && props.result !== "tie" && props.result !==""){
    result = props.result ==="win"?"lose":"win";
  } else {
    result = props.result;
  }
  return (
    <div>
        <div className='box'>
            <h2 className={`${result}`}>{result}</h2>
            <h3>{props.title}</h3>
            <img width={100} src={props.item && props.item.img} alt='img'/>
        </div>
    </div>
  )
}

export default Box