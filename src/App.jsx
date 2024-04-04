export default function App() {
  return (
    <div className="bg-orange-100 flex flex-col items-center justify-center gap-4 px-6 py-8 rounded-lg shadow-md w-72 sm:w-80 md:w-96 mx-auto my-40">
      <div>
        <input type="text" placeholder="Username" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600">Login</button>
      </div>
    </div>
  );
}
