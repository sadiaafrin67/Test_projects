import { columns } from "./columns";
import { DataTable } from "./data-table";

const data = [
  {
    id: "728ed52f",
    title: "hello",
    discount: "10",
  },
  {
    id: "92a3b5f7",
    title: "world",
    discount: "15",
  },
  {
    id: "1b4e63c8",
    title: "goodbye",
    discount: "20",
  },
  {
    id: "f0c8a71d",
    title: "greetings",
    discount: "25",
  },
  {
    id: "6f291d87",
    title: "salutations",
    discount: "30",
  },
  {
    id: "4c76e29a",
    title: "hi",
    discount: "5",
  },
  {
    id: "8e9a53b1",
    title: "hey",
    discount: "8",
  },
  {
    id: "7d3fc942",
    title: "bonjour",
    discount: "12",
  },
  {
    id: "5aef189d",
    title: "ciao",
    discount: "18",
  },
  {
    id: "b98d712f",
    title: "hola",
    discount: "22",
  },
];

export default function ContractsTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
