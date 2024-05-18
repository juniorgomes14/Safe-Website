import "./Services.css";
import aluguerCarros from "../../assets/car.webp";
import guardarCasa from "../../assets/house.webp";
import administracao from "../../assets/admin.webp";

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
              Se tem ou deseja comprar ou arrendar um imóvel em Cabo Verde, a
              Safe Solution cria a solução perfeita para si de acordo com as
              suas expetativas e necessidades. garantimos, com segurança, todos
              os serviços da competência da conservatória dos registos predial.
            </p>
            <p className="services-description">
              {" "}
              Manutenção e limpeza do imóvel. obras de manutenção e reparação do
              imóvel: canalização, electricidade, pinturas, serralheiras,
              carpintaria. instalação ou substituição de tanques. segurança do
              imóvel. resolvemos os problemas de inflitração. remodelação de
              casas de banho, cozinhas. reformas ao gosto do cliente.
            </p>
          </div>
        </div>
        <div className="car-guard">
          <div className="services-left">
            <h2 className="services-title">Serviço Auto</h2>
            <p className="services-description">
              Quer ter um carro em cabo verde para o seu conforto e deslocação
              durante o período de férias, nos tratamos disso.
            </p>
            <p className="services-description">
              Ajudamos com o despacho, todos os serviços da competência da
              conservatória dos registos autómovel. encontramos o melhor seguro
              para si, manutenção e limpeza em dia. compra ou venda do
              automóveis.
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
            <h2 className="services-title">
              Serviço Administrativos e Secretariado
            </h2>
            <p className="services-description">
              Serviços administrativos e secretariadofazemos dos seus serviços
              administrativos e assuntos bases do setor financeiro nossa
              responsabilidade.
            </p>
            <p className="services-description">
              Pagamento de impostos, declaração contribuição segurança social,
              elaboração de contratos dos funcionários, mapa de férias,
              processamento de salário, emissão do mapa do seguro obrigatório de
              acidente do treabalho, todos os serviços de competência da
              conservatória dos registos comercial. organização de arquivos,
              redação de documentos. orientação na elaboração de documentos
              fundamentais do pedido de pensão. co0nte connosco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
