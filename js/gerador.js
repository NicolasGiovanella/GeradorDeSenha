const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
const geraMaiuscula = () => {
   return String.fromCharCode(rand(65,90));//essa função retorna um character da tabela ascii
}
const geraMinuscula = () => {
    return String.fromCharCode(rand(97,122));//essa função retorna um character da tabela ascii
 }
 const geraNumero = () => {
    return String.fromCharCode(rand(48,57));//essa função retorna um character da tabela ascii
 }
 const geraSimbolo = () => {
    return String.fromCharCode(rand(33,47));//essa função retorna um character da tabela ascii
 }

 function geraSenha(qtd, maiu, min, num, simbolo){
    const senhaArray = [];

    for(let i = 0;i < qtd; i++){
        maiu && senhaArray.push(geraMaiuscula());
        min && senhaArray.push(geraMinuscula());
        num && senhaArray.push(geraNumero());
        simbolo && senhaArray.push(geraSimbolo());
    }

    console.log(senhaArray.join("").slice(0,qtd));//.join indica oque vai ter entre os valores da string, como coloque vazio, os arrays não vao ter espaços
 }

 geraSenha(8,true,false,true)