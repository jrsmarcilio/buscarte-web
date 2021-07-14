# Documentação do Projeto

#### Desenvolvedor
- [Marcílio Júnior](https://github.com/jrsmarcilio)

## Aplicação Frontend  \ Mapeamento dos Artistas de Jaboatão dos Guararapes
# Em desenvolvimento

#### Installation

Script para buildar a imagem pelo Docker:

```
docker build -t sample:dev .
```

Assim que o comando acima finalizar a construção da imagem,
vamos criar o container a partir dela:

```
docker run -v $PWD:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
```
