echo 'http_code:'
curl -s -o /dev/null -w "%{http_code}" http://localhost:8000; echo
echo 'body:'
curl http://localhost:8000; echo
