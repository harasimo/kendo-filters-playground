import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

export const defaultFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [],
};

export type Fields = "ProductName";

export const getEqFilter = (filter: CompositeFilterDescriptor, field: Fields, value: any) => {
    return {
        ...filter,
        ...{
            filters: [{ field: field, operator: "eq", value: value }],
        },
    };
};
