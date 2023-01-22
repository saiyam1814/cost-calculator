import { computeInstance, kubernetes } from "@/data";
import { kubernetesInstances } from "@/data/kubernetes";
import { useCalculatorStore } from "@/store/calculatoreStore";

const TotalCard = () => {
  const forms = useCalculatorStore((state) => state.forms);

  const totalKubernetesCost = forms.reduce(
    (acc, el) =>
      el.services === "Kubernetes"
        ? Number(el.cost) *
            el.numberOfNodes *
            kubernetes[el.types as kubernetesInstances]?.size[el.size]?.RAM +
          acc
        : 0 + acc,
    0
  );

  const totalComputeCost = forms.reduce(
    (acc, el) =>
      el.services === "Compute Instance"
        ? Number(el.cost || 0) * el.numberOfNodes + acc
        : 0 + acc,
    0
  );

  const totalDataTransferIncluded = forms.reduce((acc, el) => {
    let dataTransfer = 0;
    if (el.services === "Kubernetes") {
      dataTransfer = Number(
        kubernetes[el.types as kubernetesInstances]?.size[el.size]?.dataTransfer
      );
    } else if (el.services === "Compute Instance") {
      dataTransfer = Number(computeInstance[el.size]?.dataTransfer);
    }
    return dataTransfer * el.numberOfNodes + acc;
  }, 0);

  const totalDataTransfer = forms.reduce(
    (acc, el) =>
      el.services === "Data Transfer" ? Number(el.cost || 0) + acc : 0 + acc,
    0
  );
  const totalCost = forms
    .reduce((acc, el) => {
      let cost = Number((Number(el.cost || 0) * el.numberOfNodes).toFixed(2)); // we are rounding to 2 deciaml place to avoid dcimal number like 12.042561
      if (el.services === "Kubernetes") {
        switch (el.types) {
          case "Standard":
            cost *= kubernetes.Standard.size[el.size]?.RAM;
            break;
          case "Performance":
            cost *= kubernetes.Performance.size[el.size]?.RAM;
            break;
          case "RAM Optimized":
            cost *= kubernetes["RAM Optimized"].size[el.size]?.RAM;
            break;
          case "CPU Optimised":
            cost *= kubernetes["CPU Optimized"].size[el.size]?.RAM;
            break;
        }
      }
      return acc + cost;
    }, 0)
    .toString();

  return (
    <div className="fixed bottom-2 right-2 mx-2 pl-3 sm:mx-10 mt-5 text-xl text-white bg-[#163B5D] rounded-lg p-2 border-2">
      <p>Total Kubernetes Node Cost : ${totalKubernetesCost + " "}per month</p>
      <p>Total Compute Instance Cost : ${totalComputeCost + " "}per month</p>
      <p>Total Data Transfer Included: {totalDataTransferIncluded + " "} TB</p>
      <p>Total Data Transfer : ${totalDataTransfer + " "}per month</p>
      <p className="bg-[#0F273E] p-2 rounded-lg my-2">
        Total Cost : ${totalCost + " "}
        per month
      </p>
    </div>
  );
};

export default TotalCard;
