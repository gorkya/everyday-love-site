
#!/bin/bash
echo "Очистка кеша Vite..."
rm -rf node_modules/.vite
rm -rf dist
echo "Кеш очищен. Перезапустите dev сервер."
