class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
     super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
    this.imagem = imagem;
      
    this.frameAtual = 0;
    
    this.yInicial = height - this.altura
    this.y = this.yInicial
    
    this.velocidadeDoPulo = 0
    this.gravidade = 3
    }
    
  pula(){
    this.velocidadeDoPulo = -25
  }
  
  aplicaGravidade() {
  this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade 
  
    
    if(this.y > this.yInicial) {
      this.y = this.yInicial
    }
  }
  
  estaColidindo() {
    const precisao = 0.6
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura , inimigo.altura * precisao);
    
    return colisao;
  }
  }