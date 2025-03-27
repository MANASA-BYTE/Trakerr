export async function fetchAttendance() {
    const response = await fetch("http://localhost:5000/api/attendance");
    return response.json();
  }
  
  export async function analyzeVideoFeed() {
    const response = await fetch("http://localhost:5000/api/analyze");
    return response.json();
  }