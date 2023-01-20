import { computeInstance, kubernetes } from "@/data";
import { useCalculatorStore } from "@/store/calculatoreStore";

const TotalCard = () => {
  const forms = useCalculatorStore((state) => state.forms);
  const totalKubernetesCost = forms.reduce(
    (acc, el) =>
      el.services === "Kubernetes"
        ? Number(el.cost || 0) * el.numberOfNodes + acc
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
  const totalDataTransferIncluded = forms.reduce(
    (acc, el) =>
      el.services === "Kubernetes"
        ? Number(kubernetes?.[el.types]?.size[el.size]?.dataTransfer) *
            el.numberOfNodes +
          acc
        : el.services === "Compute Instance"
        ? Number(computeInstance[el.size]?.dataTransfer) * el.numberOfNodes +
          acc
        : 0 + acc,
    0
  );
  const totalDataTransfer = forms.reduce(
    (acc, el) =>
      el.services === "Data Transfer" ? Number(el.cost || 0) + acc : 0 + acc,
    0
  );
  const totalCost = forms
    .reduce((acc, el) => Number(el.cost || 0) * el.numberOfNodes + acc, 0)
    .toFixed(2);

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
