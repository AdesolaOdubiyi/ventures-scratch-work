// Sample Chart.js for sentiment trend
const ctx = document.getElementById('sentimentChart').getContext('2d');
const sentimentChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Sentiment Score',
      data: [0.5, 0.7, 0.6, 0.8, 0.9],
      borderColor: 'green',
      fill: false
    }]
  }
});
