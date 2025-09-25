# Stage 1: O ambiente de build com "as builder"
FROM node:alpine AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de configuração para instalar as dependências
COPY package.json package-lock.json ./

# Instala as dependências, incluindo as de desenvolvimento
RUN npm install

# Copia todo o código do projeto para o contêiner
COPY . .

# Para NestJS: compila o código TypeScript para JavaScript
RUN npm run build

# Stage 2: O ambiente de produção
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários da etapa de build
COPY --from=builder /app/package.json ./package.json

# Instala apenas as dependências de produção para otimizar o tamanho da imagem
RUN npm install --only=production

# Copia o código compilado da etapa de build
COPY --from=builder /app/dist ./dist

# Expõe a porta que a aplicação vai escutar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/main"]