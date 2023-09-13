import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./view/Dashboard";
import CreateForm from "./view/CreateForm";
import ShowOne from "./view/ShowOne";
import UpdateForm from "./view/UpdateForm";

function App() {
    return (
        <div className="App">
            <h1>Product Manager</h1>
            <ul>
                <li>
                    <Link to="/products">Dashboard</Link>
                </li>
                <li>
                    <Link to="/products/new">Create Product</Link>
                </li>
            </ul>
            <hr />

            <Routes>
                <Route path="/products" element={<Dashboard />} />
                <Route path="/products/new" element={<CreateForm />} />
                <Route path="/products/:id" element={<ShowOne />} />
                <Route path="/products/:id/edit" element={<UpdateForm />} />
            </Routes>
        </div>
    );
}

export default App;
