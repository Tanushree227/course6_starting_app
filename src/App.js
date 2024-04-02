const fast_food = [
  {
    id: '1',
    food: "pizza",
    province: "Italy"
  },
  {
    id: "2",
    food: "hamburger",
    province: "Germany"
  },
  {
    id: "3",
    food: "Gol Gappa",
    province: "India"
  },
  {
    id: "4",
    food: "Dumplings",
    province: "Japan"
  },
  {
    id: "5",
    food: "Tacos",
    province: "Mexico"
  }
]

function App() {
  const items = fast_food.map(f => {
    const text = `${f.food}`
    return <li>{text}</li>
  })
  return (
    <div className="bg-slate-800 text-white">
      <h1 className="text-center font-bold">Course 6 Starting App</h1>
      <ul>{items}</ul>
    </div>
  );
}

export default App;
