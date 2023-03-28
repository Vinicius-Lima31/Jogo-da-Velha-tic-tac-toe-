# Jogo da Velha (tic-tac-toe)

### Visual
![tic-tac-toe](https://user-images.githubusercontent.com/62820033/228094440-145bd9d6-8287-4b09-a7a2-d73759a49697.png)

## HTML
Foi usado simples tag **HTML** onde cada espaço do jogo da velha é um botão, com um evento **JavaScript** aplicado.
Onde cada botão temos um atributo `data` nele aplicado, que seria uma variavel que armazenamos no **HTML**, 
ela será de grande ajuda para especificar a posição do elemento selecionado.

## CSS
Para organização dos botões foi utilizado o display `CSS Grid`, onde usamos para fazer a organização de elementos com espaços dividos igualmente, usando em conjunto
com o display `Flex-box` para centralização do corpo principal na página.

## JavaScript
Por fim temos o **JavaScript**, onde aplicamos eventos ao clicar no botão, que fosse selecionado com `X` ou `O`, de acordo com a ordem do player. Tanto eventos aplicados ao **HTML**
como ao **CSS**, funções responsavel pela verificação do próximo jogador, pela verificação de um vencedor, e a verificação do empate, usando o atributo `data` que decretamos
no **HTML**, cada atributo `data` tendo o seu valor a posição de uma jogada, usando essa lógica e combinações para assim chegar a um resultado.
O jogo é reniciado após um Player vencer ou ser decretado empate.

---
![image](https://user-images.githubusercontent.com/62820033/228095875-675a7811-6aae-4bc7-b6bf-3e610d12acd2.png)
