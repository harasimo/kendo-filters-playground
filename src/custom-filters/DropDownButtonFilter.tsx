import React, { useState } from "react";
import { DropDownButton } from "@progress/kendo-react-buttons";
import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

interface DropDownButtonFilterProps {
    filter: CompositeFilterDescriptor;
    onFilterChange: (e: any) => void;
}

const DropDownButtonFilter = ({ onFilterChange, filter }: DropDownButtonFilterProps) => {
    const [item, setItem] = useState<string>("select item");
    return (
        <DropDownButton
            text={item}
            items={["My Profile", "Friend Requests", "Account Settings", "Support", "Log Out"]}
            onItemClick={(e) => {
                onFilterChange({
                    nextFilter: Object.assign({}, filter, { value: e.item }),
                });
                setItem(e.item);
            }}
        />
    );
};

export default DropDownButtonFilter;
