import Form from "./components/Form";
import ReactContext from "./components/ReactContext";
import Week2 from "./components/Week2";

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
    <div className="mx-36 mt-12">
      <h1 className="bg-slate-800 text-white text-center font-bold text-3xl">Course 6 Starting App</h1>
      <div className="mt-5 shadow-lg shadow-slate-300  p-10">
      <p className="text-xl">Rendering Lists in React:</p>
      <ul>{items}</ul>
      </div>
      <Form />
      <ReactContext />
      <Week2 />
    </div>
  );
}

export default App;
