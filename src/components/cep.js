const Cep = ({ informacao }) => {
  return (
    <div className="cep">
      <address>
          CEP: {informacao.cep} <br />
          Endereço: {informacao.logradouro}<br />
          Bairro: {informacao.bairro} <br />
          complemento: {informacao.complemento} <br />
          Cidade: {informacao.localidade} <br />
          Estado: {informacao.uf}<br />
          DDD:{informacao.ddd}
      </address>
    </div>
  );
};
export default Cep;