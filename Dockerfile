# Etapa 1: Construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar solo archivos esenciales para instalar dependencias
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copiar el resto del código y construir la app
COPY . .
RUN npm run build

# Etapa 2: Imagen final más ligera y segura
FROM node:18-alpine AS runner

WORKDIR /app

# Copiar solo archivos necesarios desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

# Exponer puerto (opcional pero recomendable)
EXPOSE 3000

# Usar usuario no root para mayor seguridad
USER node

# Comando de inicio de la aplicación
CMD ["node", "dist/main.js"]
