import "../style/animation.css"

const Pot = () => {
  const animation = {
    animation: "shake 2s infinite",
    transformBox: "fill-box" ,
    transformOrigin: "center" ,
  }
  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
    viewBox="0 0 64.208 64.208" style={{ enableBackground: "new 0 0 64.208 64.208" }}>
    <g>
      <g id="group-83svg">
        <path id="path-1_80_" style={{ fill: "#FF917B" }} d="M64,54.354c0-1.105-0.896-2-2-2H6c-1.105,0-2,0.895-2,2v2c0,1.104,0.895,2,2,2h56
        c1.104,0,2-0.896,2-2V54.354z"/>
        <path id="path-2_80_" style={{ fill: "#E56A77" }} d="M34.452,17.597c-16.434,0-29.757,12.757-29.757,29.757h59.513
        C64.208,30.354,50.886,17.597,34.452,17.597z"/>
        <path id="lid" style={animation} d="M61.208,45.354H1.695c-0.828,0-1.5-0.672-1.5-1.5c0-17.527,13.73-31.256,31.257-31.256
        s31.256,13.729,31.256,31.256C62.708,44.682,62.037,45.354,61.208,45.354z M3.232,42.354h56.439
        c-0.756-15.121-12.879-26.756-28.219-26.756C16.111,15.598,3.988,27.233,3.232,42.354z"/>
        <path id="path-4_80_" d="M59.5,56.354h-56c-1.93,0-3.5-1.57-3.5-3.5v-2c0-1.93,1.57-3.5,3.5-3.5h56c1.93,0,3.5,1.57,3.5,3.5v2
        C63,54.784,61.43,56.354,59.5,56.354z M3.5,50.354c-0.276,0-0.5,0.225-0.5,0.5v2c0,0.275,0.224,0.5,0.5,0.5h56
        c0.276,0,0.5-0.225,0.5-0.5v-2c0-0.275-0.224-0.5-0.5-0.5H3.5z"/>
        <path id="path-5_78_" style={animation} d="M50.153,38.043c-0.766,0-1.42-0.583-1.492-1.361c-0.963-10.361-12.708-13.658-12.827-13.69
        c-0.8-0.216-1.273-1.04-1.056-1.84s1.041-1.271,1.84-1.056c0.566,0.153,13.877,3.897,15.03,16.309
        c0.077,0.825-0.529,1.556-1.355,1.633C50.247,38.042,50.2,38.043,50.153,38.043z"/>
        <path id="path-6_70_" style={animation} d="M31.5,14.854c-0.829,0-1.5-0.672-1.5-1.5v-6c0-0.828,0.671-1.5,1.5-1.5c0.829,0,1.5,0.672,1.5,1.5v6
        C33,14.182,32.329,14.854,31.5,14.854z"/>
      </g>
    </g>
  </svg>
  )
}

export default Pot