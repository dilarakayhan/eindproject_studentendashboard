import React from "react"
import { VictoryBar, VictoryChart, VictoryLegend, VictoryAxis, VictoryTheme, VictoryGroup, VictorySharedEvents } from 'victory';


function Chart(props) {
    return (
        <div className="victory-chart">
            <VictoryChart
                domainPadding={{ x: 10 }}
                theme={VictoryTheme.material}
                padding={{ left: 50, top: 50, right: 10, bottom: 200 }}
                width={600}
                height={350}
            >
                <VictoryLegend
                    name="legend"
                    x={40}
                    y={20}
                    orientation="vertical"
                    gutter={5}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onClick: () => {
                                return [
                                    {
                                        target: "data"
                                    }
                                ]
                            }
                        }
                    }]}
                    style={{ labels: { fontSize: 5, fill: "white" } }}
                    data={[
                        { name: "fun rating", symbol: { fill: "midnightblue" } },
                        { name: "difficulty rating", symbol: { fill: "darkmagenta" } }
                    ]}
                />

                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => `${Math.round(x)}`}
                    style={{
                        tickLabels: { fontSize: 7, fill: "white" },
                        grid: { stroke: "white", strokeWidth: 0.1, strokeOpacity: 0.3 }
                    }}
                />

                <VictoryAxis
                    orientation="bottom"
                    style={{
                        tickLabels: { fontSize: 5, angle: 50, padding: 15, fill: "white" },
                        grid: { stroke: "white", strokeWidth: 0.1, strokeOpacity: 0.2 }

                    }}
                />

                <VictoryGroup
                    offset={9}
                    colorScale={["midnightblue", "darkmagenta"]}
                >

                    <VictoryBar
                        name="bar"
                        data={props.data}
                        x={"exercise"}
                        y={"funRating"}
                    />

                    <VictoryBar
                        name="bar"
                        data={props.data}
                        x={"exercise"}
                        y={"difficultyRating"}
                    />
                </VictoryGroup>

            </VictoryChart>
        </div>
    );
}

export default Chart

