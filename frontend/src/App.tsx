
import { BarChart } from "components/BarChart";
import { DataTable } from "components/DataTable";
import { DonutChart } from "components/DonutChart";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Dashboard de vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Todas vendas (%)</h5>
            <DonutChart />
          </div>
        </div>
      </div>
      <div className="py-3">
        <h2 className="text-primary">Todas as vendas</h2>
      </div>
      <DataTable />
      <Footer />
    </>
  );
}

export default App;
