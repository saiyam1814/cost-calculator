type Kubernetestype = {
    [key: string]: {
        size: {
            [key: string]: {
                storage: string;
                dataTransfer: string;
                cost: string;
            };
        };
    };
};

export const kubernetes: Kubernetestype = {
    Standard: {
        size: {
            "Extra Small (RAM: 1 GB, CPU: 1 Core)": {
                storage: "30 GB NVMe",
                dataTransfer: "1 TB",
                cost: "5",
            },
            "Small (RAM: 2 GB, CPU: 1 Core)": {
                storage: "40 GB NVMe",
                dataTransfer: "2 TB",
                cost: "10",
            },
            "Medium (RAM: 4 GB, CPU: 2 Core)": {
                storage: "50 GB NVMe",
                dataTransfer: "3 TB",
                cost: "20",
            },
            "Large (RAM: 8 GB, CPU: 4 Core)": {
                storage: "60 GB NVMe",
                dataTransfer: "4 TB",
                cost: "40",
            },
        },
    },
    Performance: {
        size: {
            "Small (RAM: 16 GB, CPU: 4 Core)": {
                storage: "60 GB NVMe",
                dataTransfer: "6 TB",
                cost: "80",
            },
            "Medium (RAM: 32 GB, CPU: 8 Core)": {
                storage: "80 GB NVMe",
                dataTransfer: "8 TB",
                cost: "160",
            },
            "Large (RAM: 64 GB, CPU: 16 Core)": {
                storage: "120 GB NVMe",
                dataTransfer: "10 TB",
                cost: "320",
            },
            "Extra Large (RAM: 128 GB, CPU: 32 Core)": {
                storage: "180 GB NVMe",
                dataTransfer: "12 TB",
                cost: "640",
            },
        },
    },
    "CPU Optimized": {
        size: {
            "Small (RAM: 16 GB, CPU: 8 Core)": {
                storage: "60 GB NVMe",
                dataTransfer: "6 TB",
                cost: "128",
            },
            "Medium (RAM: 32 GB, CPU: 16 Core)": {
                storage: "80 GB NVMe",
                dataTransfer: "8 TB",
                cost: "256",
            },
            "Large (RAM: 64 GB, CPU: 32 Core)": {
                storage: "120 GB NVMe",
                dataTransfer: "10 TB",
                cost: "512",
            },
            "Extra Large (RAM: 128 GB, CPU: 64 Core)": {
                storage: "180 GB NVMe",
                dataTransfer: "12 TB",
                cost: "1024",
            },
        },
    },
    "RAM Optimized": {
        size: {
            " Small (RAM: 16 GB, CPU: 2 Core)": {
                storage: "60 GB NVMe",
                dataTransfer: "4 TB",
                cost: "72",
            },
            "Medium (RAM: 32 GB, CPU: 4 Core)": {
                storage: "80 GB NVMe",
                dataTransfer: "6 TB",
                cost: "144",
            },
            "Large (RAM: 64 GB, CPU: 8 Core)": {
                storage: "120 GB NVMe",
                dataTransfer: "8 TB",
                cost: "288",
            },
            "Extra Large (RAM: 128 GB, CPU: 16 Core)": {
                storage: "180 GB NVMe",
                dataTransfer: "10 TB",
                cost: "576",
            },
        },
    },
};
