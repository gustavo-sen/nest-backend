# --- Estágio 1: Builder ---
# Instala dependências e constrói a aplicação
FROM node:22 AS builder

WORKDIR /usr/src/app

# Copia os arquivos de definição de pacotes
COPY package*.json ./

# Instala as dependências de produção
RUN npm install --only=production

# Copia o resto do código fonte
COPY . .

# Compila o projeto TypeScript para JavaScript
RUN npm run build

# --- Estágio 2: Production ---
# Cria a imagem final e otimizada para produção
FROM node:22-alpine

# Define o WORKDIR novamente para o novo estágio
WORKDIR /usr/src/app

# Copia as dependências de produção do estágio 'builder'
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copia o código compilado (pasta 'dist') do estágio 'builder'
COPY --from=builder /usr/src/app/dist ./dist

# Copia o package.json
COPY package*.json ./

# O comando para iniciar a aplicação em produção
# Ele executa o JavaScript que está na pasta 'dist'
CMD [ "node", "dist/main" ]