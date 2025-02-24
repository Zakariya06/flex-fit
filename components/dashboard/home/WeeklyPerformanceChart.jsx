export function WeeklyPerformanceChart({data}) {
  // Sample data representing percentage values for each day 
  return (
    <div className={"chartContainer"}>
      {data.map((item, index) => (
        <div key={index} className={"barGroup"}>
          <div className={"progressBar"}>
            <div className={"progressFill"} style={{ height: `${item.value}%` }} />
          </div>
          <div className={"label"}>{item.day}</div>
        </div>
      ))}
    </div>
  )
}

