import { ChangeEvent } from 'react';
import { create } from 'zustand'
import { ServiceType } from '@/data/services';
import { devtools } from 'zustand/middleware'
import { computeInstance, kubernetes, objectStore } from '@/data';

type FormType = {
    services: string;
    types: string;
    size: string;
    numberOfNodes: number;
    cost: string;
}

type CostCalculatorState = {
    forms: FormType[];
    formsCount: number
    handleNodes: (e: ChangeEvent<HTMLInputElement>, i: number) => void;
    handleTypeChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
    handleServiceChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
    handleSizeChange: (
        e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
        i: number,
        service: ServiceType
    ) => void;
    handleRemoveClick: (i: number) => void;
    handleAddClick: (type: ServiceType) => void
}

export const useCalculatorStore = create<CostCalculatorState>()(
    devtools(
        (set) => ({
            formsCount: 1,
            forms: [{
                services: "Kubernetes",
                types: "",
                size: "",
                numberOfNodes: 1,
                cost: "",
            }],
            handleNodes: (e, index) => {
                set((state) => {
                    const updatedForms = [...state.forms]
                    updatedForms[index].numberOfNodes = e.target.valueAsNumber
                    return { forms: updatedForms }
                });
            },
            handleServiceChange: (e, i) => {
                set(state => {
                    const updatedForms = [...state.forms]

                    updatedForms[i].services = e.target.value;
                    updatedForms[i].types = "";
                    updatedForms[i].numberOfNodes = 1;
                    updatedForms[i].size = "";
                    if (e.target.value === "Load balancers")
                        updatedForms[i].cost = "10";
                    else updatedForms[i].cost = "";

                    return { forms: updatedForms }
                })
            },
            handleTypeChange: (e, i) => {
                set(state => {
                    const updatedForms = [...state.forms]
                    updatedForms[i].types = e.target.value;
                    updatedForms[i].size = "";
                    if (e.target.value === "load balancers") updatedForms[i].cost = "10"
                    else updatedForms[i].cost = "";
                    return { forms: updatedForms }
                })
            },
            handleSizeChange: (e, i, service) => {
                set(state => {
                    const updatedForms = [...state.forms]

                    if (service === "Volumes" || service === "Data Transfer") {
                        updatedForms[i].size = Math.trunc(
                            Number(e.target.value)
                        ).toString();
                    } else {
                        updatedForms[i].size = e.target.value;
                    }

                    if (service === "Kubernetes") updatedForms[i].cost = kubernetes?.[updatedForms[i]?.types].size[updatedForms[i].size]?.cost;
                    else if (service === "Compute Instance") updatedForms[i].cost = computeInstance?.[e.target.value]?.cost;
                    else if (service === "Object Store") updatedForms[i].cost = objectStore[updatedForms[i].size].cost;
                    else if (service === "Volumes") updatedForms[i].cost = (Number(updatedForms[i].size) * 0.1)
                        .toFixed(2)
                        .toString();
                    else if (service === "Data Transfer") updatedForms[i].cost = (Number(updatedForms[i].size) * 0.01)
                        .toFixed(2)
                        .toString();
                    return { forms: updatedForms }
                })
            },
            handleAddClick: (type) => {
                set(state => {
                    let updatedForm = []

                    if (type === "Volumes" || type === "Data Transfer")
                        updatedForm = [
                            ...state.forms,
                            {
                                services: type,
                                types: "",
                                size: "1",
                                numberOfNodes: 1,
                                cost: type === "Volumes" ? "0.1" : "0.01",
                            },
                        ];
                    else if (type === "Load balancers")
                        updatedForm = [
                            ...state.forms,
                            {
                                services: type,
                                types: "",
                                size: "",
                                numberOfNodes: 1,
                                cost: "10",
                            },
                        ];
                    else
                        updatedForm = [
                            ...state.forms,
                            {
                                services: type,
                                types: "",
                                size: "",
                                numberOfNodes: 1,
                                cost: "",
                            },
                        ];
                    return { forms: updatedForm, formsCount: state.formsCount + 1 }
                })
            },
            handleRemoveClick: (index: number) => {
                set((state) => {
                    const updatedForms = [...state.forms]
                    updatedForms.splice(index, 1)
                    return { forms: updatedForms, formsCount: state.formsCount - 1 }
                });
            },
        })
    )
)