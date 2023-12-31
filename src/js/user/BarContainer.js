import Bar from "./Bar"

const BarContainer = ({name,nutr,color,unit,type}) => {
  return (
    <div className="h-[6.6%] flex justify-between items-center">
        <div className="drop-shadow-md w-[30%]">{name}</div>
        <Bar nutr={nutr} color={color} unit={unit} type={type}/>
    </div>
  )
}

export default BarContainer