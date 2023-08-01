import { useEffect, useState } from "react"
import { GraphStyled } from "../../styles/Graph";
import { TextParag } from "../../styles/Text";

import {VictoryPie, VictoryChart, VictoryBar} from 'victory'

const Graphic = ({data}) => {
const [graph, setGraph] = useState([])
const [total, setTotal] = useState(0);

    useEffect(() => {

    if(data.length){

        const graphData = data.map(item => {
            return {
                x:item.title,
                y:Number(item.acessos)
            }
        })
        setGraph(graphData)

        setTotal(data.map((dados) => {
            return Number(dados.acessos)
        }).reduce((a,b) => a + b))
    }
        
    }, [data])
    return (
    <GraphStyled tyled className="aniamteLeft">
        <div className="totalAccess">
            <TextParag>Acessos: {total}</TextParag>
        </div>
        <div className="graphItem">
            <VictoryPie data={graph} innerRadius={50} padding={{top:20, bottom:20, length:80, right:80}}
            style={{data:{
                fillOpacity:0.9,
                stroke: '#fff',
                strokeWidth:2
            },
            labels:{
                fontSize:14,
                fill:'#333',
            }}}/>
        </div>
        <div className="graphItem">
            <VictoryChart>
                <VictoryBar alignment="start" data={graph}></VictoryBar>
            </VictoryChart>
        </div>
    </GraphStyled>
  )
}

export default Graphic
;
