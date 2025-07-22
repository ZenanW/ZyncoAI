import './analytics.css';
import { useNavigate } from 'react-router-dom';
import {
  Line,
  Pie
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

export default function Analytics() {
  const navigate = useNavigate();

  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const trendData = (label: string, data: number[], color: string) => ({
    labels,
    datasets: [{
      label,
      data,
      fill: false,
      borderColor: color,
      tension: 0.4
    }]
  });

  const pieData = {
    labels: ['Consume', 'Create'],
    datasets: [{
      data: [40, 60], // Placeholder conversion rate
      backgroundColor: ['#9b5de5', '#00bbf9']
    }]
  };

  return (
    <div className="analytics-container">
      <button className="back-button" onClick={() => navigate('/core')}>← Back</button>

      <h2>📊 Your Analytics</h2>

      <div className="chart-section">
        <Line data={trendData("Mood", [5, 6, 4, 7, 6, 8, 5], '#f15bb5')} />
        <Line data={trendData("Energy", [8, 7, 6, 7, 8, 9, 8], '#00f5d4')} />
        <Line data={trendData("Focus", [7, 5, 6, 7, 5, 6, 7], '#fee440')} />
      </div>

      <div className="pie-section">
        <h3>Input vs Output</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}
