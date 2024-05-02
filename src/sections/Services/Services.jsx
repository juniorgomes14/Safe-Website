import "./Services.css";
import aluguerCarros from "../../assets/car.jpg";
import guardarCasa from "../../assets/house.jpg";
import administracao from "../../assets/admin.jpg";

const Services = () => {
  return (
    <section id="services">
      <div className="services-container">
        <div className="house-guard">
          <div className="services-left">
            <img src={guardarCasa} alt="guardarCasas"></img>
          </div>
          <div className="services-right">
            <h2 className="services-title">Guardamos sua casa</h2>
            <p className="services-description">
              Serviços de pequenas obras de remodelação e reparação de casa e apartamentos; Segurança e limpeza, pagamento de impostos,

            </p>
            {/* <p className="services-description">
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing cras in
              felis viverra id congue odio id. Mauris enim nisl proin eu odio
              mollis enim cras placerat. Varius non nunc odio at amet orci amet
              eu purus. Nam semper arcu dolor cursus facilisi interdum.
            </p> */}
          </div>
        </div>
        <div className="car-guard">
          <div className="services-left">
            <h2 className="services-title">Serviço Auto</h2>
            <p className="services-description">
            Compra de venda de automóveis; Limpeza; pagamento de impostos e seguros; manutenção; 

            </p>
            <p className="services-description">
              {/* Lorem ipsum dolor sit amet consectetur. Nulla adipiscing cras in
              felis viverra id congue odio id. Mauris enim nisl proin eu odio
              mollis enim cras placerat. Varius non nunc odio at amet orci amet
              eu purus. Nam semper arcu dolor cursus facilisi interdum. */}
            </p>
          </div>
          <div className="services-right">
            <img src={aluguerCarros} alt="aluguerCarros"></img>
          </div>
        </div>
        <div className="administration-work">
          <div className="services-left">
            <img src={administracao} alt="administrativo"></img>
          </div>
          <div className="services-right">
            <h2 className="services-title">Serviço administrativos e secretariado</h2>
            <p className="services-description">
            Administração de folhas de pagamentos e benefícios, preparação de documentos, organização de arquivos, redação de documentos; Orientação na elaboração de documentos fundamentais do pedido de pensão;

            </p>
            {/* <p className="services-description">
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing cras in
              felis viverra id congue odio id. Mauris enim nisl proin eu odio
              mollis enim cras placerat. Varius non nunc odio at amet orci amet
              eu purus. Nam semper arcu dolor cursus facilisi interdum.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
