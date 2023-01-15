type ComputeInstanceType = {
    [key: string]: {
        storage: string;
        dataTransfer: string;
        cost: string;
    };
};
export const computeInstance: ComputeInstanceType = {
    "Extra Small ( RAM: 1 GB, CPU: 1 Core )": {
        storage: "25 GB NVMe",
        dataTransfer: "1 TB",
        cost: "5",
    },
    "Small ( RAM: 2 GB, CPU: 1 Core )": {
        storage: "25 GB NVMe",
        dataTransfer: "2 TB",
        cost: "10",
    },
    "Medium ( RAM: 4 GB, CPU: 2 Core )": {
        storage: "50 GB NVMe",
        dataTransfer: "3 TB",
        cost: "20",
    },
    "Large ( RAM: 8 GB, CPU: 4 Core )": {
        storage: "100 GB NVMe",
        dataTransfer: "4 TB",
        cost: "40",
    },
    "Extra Large ( RAM: 16 GB, CPU: 6 Core )": {
        storage: "150 GB NVMe",
        dataTransfer: "6 TB",
        cost: "80",
    },
    "2X Large ( RAM: 32 GB, CPU: 8 Core )": {
        storage: "200 GB NVMe",
        dataTransfer: "9 TB",
        cost: "160",
    },
};