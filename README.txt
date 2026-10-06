CHECKLIST DE FROTA — GOOGLE SHEETS + QR CODE

Abas da planilha:
VEICULOS
PLACA | VEICULO | ATIVO
SXS0G68 | ONIX | TRUE
RAA3F67 | ONIX | TRUE

VISTORIAS
ID | DATA/HORA | PLACA | VEICULO | QUILOMETRAGEM | RESPONSAVEL | SITUACAO | OBSERVACOES

1. Crie uma planilha Google com essas duas abas e cabeçalhos.
2. Abra Extensões > Apps Script.
3. Crie Code.gs e Index.html e cole os arquivos deste pacote.
4. Em Code.gs, troque COLE_AQUI_O_ID_DA_PLANILHA pelo ID da planilha.
5. Implantar > Nova implantação > Aplicativo da Web.
6. Executar como: sua conta.
7. Acesso: conforme sua política do Google Workspace.
8. URL final:
   https://script.google.com/macros/s/SEU_DEPLOYMENT_ID/exec

QR por veículo:
   URL + ?placa=SXS0G68
   URL + ?placa=RAA3F67

O QR faz o veículo ser identificado automaticamente. A pessoa só informa responsável, KM e os 15 itens.
O objetivo é apontar problemas para o gestor de frotas fazer a vistoria, e não substituir uma inspeção mecânica detalhada.

Os QR PNG deste pacote são apenas modelos com URL de exemplo. Depois do Deploy, substitua pela URL real.
