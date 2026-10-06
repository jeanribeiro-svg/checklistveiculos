const SPREADSHEET_ID = 'COLE_AQUI_O_ID_DA_PLANILHA';

function doGet(e) {
  const template = HtmlService.createTemplateFromFile('Index');
  template.placa = (e && e.parameter && e.parameter.placa) ? e.parameter.placa.toUpperCase() : '';
  return template.evaluate().setTitle('Vistoria de Frota');
}

function salvarVistoria(dados) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const aba = ss.getSheetByName('VISTORIAS');
  if (!aba) throw new Error('Aba VISTORIAS não encontrada.');
  aba.appendRow([
    Utilities.getUuid(), new Date(), dados.placa, dados.veiculo || '',
    dados.quilometragem || '', dados.responsavel || '',
    dados.situacao || '', dados.observacoes || ''
  ]);
  return {ok:true};
}

function obterVeiculo(placa) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const aba = ss.getSheetByName('VEICULOS');
  if (!aba) return null;
  const v = aba.getDataRange().getValues();
  for (let i=1;i<v.length;i++) {
    if (String(v[i][0]).toUpperCase() === String(placa).toUpperCase())
      return {placa:v[i][0], veiculo:v[i][1], ativo:v[i][2] !== false};
  }
  return null;
}
