import type { ServiceType } from "@/data/services";
import { useCalculatorStore } from "@/store/calculatoreStore";
import { shallow } from "zustand/shallow";
import KubernetesForm from "@components/services/kubernetes";
import ComputeInstanceForm from "@components/services/computeinstance";
import ObjectStoreForm from "@components/services/objectStoreForm";
import VolumesForm from "@components/services/volumeForm";
import DataTransferForm from "@components/services/dataTransferForm";
import LoadBalancerForm from "@components/services/loadBalancerForm";
import AddMenu from "../lib/AddMenu";
import TotalCard from "./TotalCard";

const CostCalculator = () => {
  const { formsCount, forms, handleAddClick } = useCalculatorStore((state) => {
    return {
      formsCount: state.formsCount,
      forms: state.forms,
      handleAddClick: state.handleAddClick,
    };
  }, shallow);

  return (
    <>
      <div className="flex justify-center items-center gap-10 mb-4 px-10 py-5 shadow-sm">
        <h1 className="text-2xl p-2 text-white">Civo Cost Calculator</h1>
        <AddMenu onClick={handleAddClick} />
      </div>
      <div>
        <div className="mx-2 sm:mx-10 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-white mb-48">
          {[...Array(formsCount)].map((e, i) => {
            switch (forms[i]?.services as ServiceType) {
              case "Kubernetes":
                return <KubernetesForm key={i} i={i} />;
              case "Compute Instance":
                return <ComputeInstanceForm key={i} i={i} />;
              case "Object Store":
                return <ObjectStoreForm key={i} i={i} />;
              case "Volumes":
                return <VolumesForm key={i} i={i} />;
              case "Data Transfer":
                return <DataTransferForm key={i} i={i} />;
              case "Load balancers":
                return <LoadBalancerForm key={i} i={i} />;
              default:
                return;
            }
          })}
        </div>
      </div>
      <TotalCard />
    </>
  );
};

export default CostCalculator;
