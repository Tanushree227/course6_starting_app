const fast_food = [
  {
    "food": "pizza",
    "province": "Italy"
  },
  {
    "food": "hamburger",
    "province": "Germany"
  },
  {
    "food": "Gol Gappa",
    "province": "India"
  },
  {
    "food": "Dumplings",
    "province": "Japan"
  },
  {
    "food": "Tacos",
    "province": "Mexico"
  }
]

const food = fast_food.map(f => {
  return {
    content: `${f.food}`
  };
})


function App() {
  console.log(food);
  return (
    <div>
      <h1 className="text-center bg-slate-800 font-bold text-white">Course 6 Starting App</h1>
    </div>
  );
}

export default App;
