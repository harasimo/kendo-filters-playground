import React from "react";
import "./App.scss";
import "react-json-view-lite/dist/index.css";
import KendoReactFilter from "./wrappers/KendoReactFilter";
import CustomFilter from "./wrappers/CustomFilter";

function App() {
    return (
        <div className="App">
            <KendoReactFilter />
            <CustomFilter />
        </div>
    );
}

export default App;
