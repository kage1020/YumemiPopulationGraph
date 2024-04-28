import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import type { Chart } from "chart.js"
import { forwardRef } from "react"
import type { Ref } from "react"
import { Line } from "react-chartjs-2"

import type { LineData } from "@/types/data"
import { createChartData, createChartOptions } from "@/utils/chart"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const PopulationLine = forwardRef(
  ({ labels, data }: LineData, ref: Ref<Chart<"line"> | undefined>) => {
    const chartData = createChartData({ labels, data })
    const options = createChartOptions()

    return <Line data={chartData} options={options} height={600} ref={ref} />
  },
)
