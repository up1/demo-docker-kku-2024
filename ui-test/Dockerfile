FROM mcr.microsoft.com/playwright:v1.40.0-jammy
WORKDIR /app
COPY . .
RUN npm install
RUN npx playwright install
CMD [ "npx", "playwright", "test" ]