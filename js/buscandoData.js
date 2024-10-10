function buscandoData(response) {
  // Extraindo a data
  const ultimaAtualizacao = new Date(response.time_last_update_utc);

  // Opções para formatar a data
  const opcoesData = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // Formata a data
  const dataFormatada = new Intl.DateTimeFormat("pt-BR", opcoesData).format(
    ultimaAtualizacao
  );

  // Obtendo a hora formatada
  const horaFormatada = ultimaAtualizacao.toTimeString().split(" ")[0]; // '00:02:32'

  // Exibindo no HTML
  document.getElementById(
    "data-ultima-att"
  ).textContent = `${dataFormatada} ${horaFormatada}`;

  console.log(`Última atualização: ${dataFormatada} ${horaFormatada}`);
}
