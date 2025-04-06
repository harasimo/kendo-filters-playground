import React, { useState } from "react";
import "../App.scss";
import { Filter, FilterChangeEvent } from "@progress/kendo-react-data-tools";
import { CompositeFilterDescriptor } from "@progress/kendo-data-query";
import DropDownButtonFilter from "../custom-filters/DropDownButtonFilter";
import { allExpanded, JsonView, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { defaultFilter } from "../commons";

const KendoReactFilter = () => {
    const [filter, setFilter] = useState<CompositeFilterDescriptor>(defaultFilter);

    return (
        <>
            <h1>KendoReact Filter</h1>
            <Filter
                value={filter}
                onChange={(event: FilterChangeEvent) => {
                    setFilter(event.filter);
                }}
                fields={[
                    {
                        name: "ProductName",
                        label: "Name",
                        filter: DropDownButtonFilter,
                        operators: [{ text: "filter.eqOperator", operator: "eq" }],
                    },
                ]}
            />
            <JsonView data={filter} shouldExpandNode={allExpanded} style={defaultStyles} />
        </>
    );
};

export default KendoReactFilter;
