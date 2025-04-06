import { DropDownButton } from "@progress/kendo-react-buttons";
import { useState } from "react";

interface DropDownButtonCustomProps {
    className: string;
    setFilter: (value: any) => void;
}

const DropDownButtonCustom = ({ className, setFilter }: DropDownButtonCustomProps) => {
    const [text, setText] = useState<string>("select item");

    return (
        <DropDownButton
            className={className}
            text={text}
            items={["My Profile", "Friend Requests", "Account Settings", "Support", "Log Out"]}
            onItemClick={(e) => {
                setText(e.item);
                setFilter(e.item);
            }}
        />
    );
};

export default DropDownButtonCustom;
