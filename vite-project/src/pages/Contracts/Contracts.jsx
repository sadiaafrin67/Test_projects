import PageTitle from "@/components/PageTitle/PageTitle";
import ContractsTable from "./_components/contracts-table/ContractsTable";

const Contracts = () => {
  return (
    <div>
      <PageTitle
        items={[
          { label: "Contracts", path: "/dashboard/contracts", active: true },
        ]}
        title={"Contracts Tables"}
      />

      <div className="mt-12 mb-4 text-lg font-semibold">List of Contracts</div>

      <ContractsTable />
    </div>
  );
};

export default Contracts;
