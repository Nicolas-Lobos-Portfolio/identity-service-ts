# Etapa 1: Construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Instalar dependencias necesarias para construir la app
COPY package.json package-lock.json ./
RUN npm install --omit=dev  # Se instala todo (incluyendo @nestjs/cli si está en devDependencies)

# Copiar el código fuente
COPY . .

# Instalar @nestjs/cli si no está en las dependencias del proyecto
RUN npm install --save-dev @nestjs/cli

# Construir la aplicación
RUN npx nest build

# Eliminar node_modules para evitar archivos innecesarios
RUN rm -rf node_modules

# Etapa 2: Imagen final más ligera y segura
FROM node:18-alpine AS runner

WORKDIR /app

# Copiar solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Instalar solo las dependencias de producción
RUN npm install --omit=dev

# Exponer el puerto 3000
EXPOSE 3000

# Usar usuario no root para mayor seguridad
USER node

# Comando de inicio de la aplicación
CMD ["node", "dist/main.js"]
