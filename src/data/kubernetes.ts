export type kubernetesInstances = "Standard" | "Performance" | "CPU Optimized" | "RAM Optimized"
type Kubernetestype = {
    [key in kubernetesInstances]: {
        size: {
            [key: string]: {
                storage: string;
                RAM: number;
                dataTransfer: string;
                costPerGbRam: number;
            };
        };
    };
};

export const kubernetes: Kubernetestype = {
    Standard: {
        size: {
            "Extra Small (RAM: 1 GB, CPU: 1 Core)": {
                storage: "30 GB NVMe",
                RAM: 1,
                dataTransfer: "1",
                costPerGbRam: 5,
            },
            "Small (RAM: 2 GB, CPU: 1 Core)": {
                storage: "40 GB NVMe",
                RAM: 2,
                dataTransfer: "2",
                costPerGbRam: 5,
            },
            "Medium (RAM: 4 GB, CPU: 2 Core)": {
                storage: "50 GB NVMe",
                RAM: 4,
                dataTransfer: "3",
                costPerGbRam: 5,
            },
            "Large (RAM: 8 GB, CPU: 4 Core)": {
                storage: "60 GB NVMe",
                RAM: 8,
                dataTransfer: "4",
                costPerGbRam: 5,
            },
        },
    },
    Performance: {
        size: {
            "Small (RAM: 16 GB, CPU: 4 Core)": {
                storage: "60 GB NVMe",
                RAM: 16,
                dataTransfer: "6",
                costPerGbRam: 5,
            },
            "Medium (RAM: 32 GB, CPU: 8 Core)": {
                storage: "80 GB NVMe",
                RAM: 32,
                dataTransfer: "8",
                costPerGbRam: 5,
            },
            "Large (RAM: 64 GB, CPU: 16 Core)": {
                storage: "120 GB NVMe",
                RAM: 64,
                dataTransfer: "10",
                costPerGbRam: 5,
            },
            "Extra Large (RAM: 128 GB, CPU: 32 Core)": {
                storage: "180 GB NVMe",
                RAM: 128,
                dataTransfer: "12",
                costPerGbRam: 5,
            },
        },
    },
    "CPU Optimized": {
        size: {
            "Small (RAM: 16 GB, CPU: 8 Core)": {
                storage: "60 GB NVMe",
                RAM: 16,
                dataTransfer: "6",
                costPerGbRam: 8,
            },
            "Medium (RAM: 32 GB, CPU: 16 Core)": {
                storage: "80 GB NVMe",
                RAM: 32,
                dataTransfer: "8",
                costPerGbRam: 8,
            },
            "Large (RAM: 64 GB, CPU: 32 Core)": {
                storage: "120 GB NVMe",
                RAM: 64,
                dataTransfer: "10",
                costPerGbRam: 8,
            },
            "Extra Large (RAM: 128 GB, CPU: 64 Core)": {
                storage: "180 GB NVMe",
                RAM: 128,
                dataTransfer: "12",
                costPerGbRam: 8,
            },
        },
    },
    "RAM Optimized": {
        size: {
            "Small (RAM: 16 GB, CPU: 2 Core)": {
                storage: "60 GB NVMe",
                RAM: 16,
                dataTransfer: "4",
                costPerGbRam: 4.5,
            },
            "Medium (RAM: 32 GB, CPU: 4 Core)": {
                storage: "80 GB NVMe",
                RAM: 32,
                dataTransfer: "6",
                costPerGbRam: 4.5,
            },
            "Large (RAM: 64 GB, CPU: 8 Core)": {
                storage: "120 GB NVMe",
                RAM: 64,
                dataTransfer: "8",
                costPerGbRam: 4.5,
            },
            "Extra Large (RAM: 128 GB, CPU: 16 Core)": {
                storage: "180 GB NVMe",
                RAM: 128,
                dataTransfer: "10",
                costPerGbRam: 4.5,
            },
        },
    },
};
