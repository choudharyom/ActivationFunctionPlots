import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Generate data points for activation functions
const generateActivationData = () => {
  const data = [];
  for (let x = -5; x <= 5; x += 0.1) {
    // ReLU
    const relu = Math.max(0, x);

    // Leaky ReLU (with α = 0.01)
    const leakyRelu = x > 0 ? x : 0.01 * x;

    // PReLU (with learnable α = 0.1)
    const prelu = x > 0 ? x : 0.1 * x;

    // ELU (with α = 1)
    const elu = x > 0 ? x : 1 * (Math.exp(x) - 1);

    data.push({
      x,
      ReLU: relu,
      'Leaky ReLU': leakyRelu,
      PReLU: prelu,
      ELU: elu,
    });
  }
  return data;
};

const ActivationFunctionPlots = () => {
  const data = generateActivationData();

  return (
    <div className="w-full h-[500px] p-4">
      <h3 className="text-2xl font-bold mb-4 text-center">
        Activation Functions Comparison
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="x"
            label={{
              value: 'Input (x)',
              position: 'insideBottom',
              offset: -10,
            }}
          />
          <YAxis
            label={{
              value: 'Activation Output',
              angle: -90,
              position: 'insideLeft',
              offset: -10,
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ReLU"
            stroke="#8884d8"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Leaky ReLU"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="PReLU"
            stroke="#ffc658"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="ELU"
            stroke="#ff7300"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivationFunctionPlots;
