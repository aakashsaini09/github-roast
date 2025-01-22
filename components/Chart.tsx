"use client"
import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
 
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
let chartData;
const Chart = ({chartDataArray}: {chartDataArray: any}) => {
    const firstname = Object.keys(chartDataArray[0])[1];
    const secondname = Object.keys(chartDataArray[0])[2];
    chartData = chartDataArray;
    const chartConfig = {
        User1: {
          label: firstname,
          color: "#2563eb",
        },
        User2: {
          label: secondname,
          color: "#60a5fa",
        },
      } satisfies ChartConfig
      
  return (
    <div>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-[60%] mx-auto">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="Skill"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey={firstname} fill="var(--color-User1)" radius={4} />
        <Bar dataKey={secondname} fill="var(--color-User2)" radius={4} />
      </BarChart>
    </ChartContainer>
    </div>
  )
}

export default Chart
