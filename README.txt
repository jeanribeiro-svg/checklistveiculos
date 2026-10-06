CHECKLIST DE FROTA — MVP
==========================

1. Abra index.html em um navegador para testar.

2. Para simular um QR Code de um veículo, use:
   index.html?placa=ABC1D23

   Exemplo:
   index.html?placa=JAB1C23

3. A placa é lida automaticamente da URL e fica bloqueada para edição.

4. Esta primeira versão salva os registros no armazenamento local do navegador
   (localStorage). Isso permite validar o fluxo e a experiência antes da integração
   com Google Sheets.

5. Próxima etapa recomendada:
   - Google Apps Script como API;
   - aba "Veículos" com placa, modelo, unidade e URL/QR;
   - aba "Inspeções" com data, hora, placa, responsável, KM e resultado;
   - aba "Itens" com cada item do checklist;
   - envio de fotos para Google Drive, se necessário;
   - geração em lote dos QR Codes.

Estrutura sugerida para a URL:
   https://SEU-ENDERECO/checklist/?placa=ABC1D23

Depois que o endereço final for definido, é possível gerar um QR Code diferente
para cada veículo apontando para a sua placa.
