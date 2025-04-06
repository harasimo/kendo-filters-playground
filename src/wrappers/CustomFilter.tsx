import React, { useState } from "react";
import "../App.scss";
import { CompositeFilterDescriptor } from "@progress/kendo-data-query";
import { allExpanded, JsonView, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { Button } from "@progress/kendo-react-buttons";
import { xIcon } from "@progress/kendo-svg-icons";
import DropDownButtonCustom from "../custom-filters/DropDownButtonCustom";
import { defaultFilter, getEqFilter } from "../commons";

const CustomFilter = () => {
    const [filter, setFilter] = useState<CompositeFilterDescriptor>(defaultFilter);

    return (
        <>
            <h1>Custom filter</h1>
            <div className="custom-filter">
                <label className="custom-filter_item">Pick option</label>
                <DropDownButtonCustom
                    className="custom-filter_item"
                    setFilter={(value: any) => {
                        setFilter(getEqFilter(filter, "ProductName", value));
                    }}
                />
                <Button
                    className="custom-filter_item"
                    svgIcon={xIcon}
                    onClick={() => {
                        setFilter(defaultFilter);
                    }}
                />
            </div>
            <JsonView data={filter} shouldExpandNode={allExpanded} style={defaultStyles} />
        </>
    );
};

export default CustomFilter;
